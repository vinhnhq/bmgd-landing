import { ScrollArea, ScrollBar } from "@/components/me/scroll-area";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ConditionalRenderer, MyFormLabel, MyFormMessage } from "@/components/utils";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { useState } from "react";
import type { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { FaAsterisk } from "react-icons/fa";
import { LuCalendarCheck2 } from "react-icons/lu";

export interface DateTimePickerProps<T extends FieldValues> {
	form: UseFormReturn<T>;
	name: Path<T>;
	label: string;
	required?: boolean;
	className?: string;
	labelColor?: "black" | "red";
	errorColor?: "black" | "red";
	labelClassName?: string;
	containerClassName?: string;
}

const amTimeSlots = ["8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"];
const pmTimeSlots = ["1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM"];

// Extract common functionality to a reusable hook
const useDateTimePicker = <T extends FieldValues>(form: UseFormReturn<T>, name: Path<T>) => {
	const [isCalendarOpen, setIsCalendarOpen] = useState(false);

	const isDateDisabled = (date: Date) => {
		const today = new Date();
		today.setHours(0, 0, 0, 0);
		date.setHours(0, 0, 0, 0);
		return date < today || isWeekend(date);
	};

	const isTimeDisabled = (timeSlot: string) => {
		const selectedDate = form.getValues(name)?.date;
		const today = new Date();

		if (selectedDate?.toDateString() === today.toDateString()) {
			const currentHour = today.getHours();
			const currentMinutes = today.getMinutes();

			const [time, period] = timeSlot.split(" ");
			const [hours, minutes] = time.split(":").map(Number);
			let slotHour = hours;

			if (period === "PM" && hours !== 12) {
				slotHour += 12;
			} else if (period === "AM" && hours === 12) {
				slotHour = 0;
			}

			return slotHour < currentHour || (slotHour === currentHour && minutes <= currentMinutes);
		}
		return false;
	};

	const isWeekend = (date: Date) => {
		const day = date.getDay();
		return day === 0 || day === 6;
	};

	return {
		isCalendarOpen,
		setIsCalendarOpen,
		isDateDisabled,
		isTimeDisabled,
		isWeekend,
	};
};

export const DateTimePicker = <T extends FieldValues>({
	form,
	name,
	label,
	required = false,
	className,
	labelColor = "black",
	errorColor = "red",
	labelClassName,
	containerClassName,
}: DateTimePickerProps<T>) => {
	const { isCalendarOpen, setIsCalendarOpen, isDateDisabled, isTimeDisabled } = useDateTimePicker(form, name);

	return (
		<FormField
			control={form.control}
			name={name}
			render={({ field }) => (
				<FormItem className={cn("flex items-center gap-4", containerClassName)}>
					<MyFormLabel label={label} labelColor={labelColor} className={labelClassName} required={required} />

					<Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
						<PopoverTrigger asChild>
							<div className="flex flex-col gap-2 w-full">
								<FormControl>
									<button
										type="button"
										className={cn(
											"text-base font-medium",
											"border border-black rounded-md shadow-elevation",
											"flex items-center justify-between w-full h-12 px-3 py-2",
											"focus-visible:outline-none focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
											className,
										)}
									>
										<ConditionalRenderer
											condition={!field.value || !field.value.date || !field.value.time}
											component={<span className="text-black/60">Chọn thời gian liên hệ</span>}
											fallback={<span>{getDateTimeString(field.value?.date, field.value?.time)}</span>}
										/>
										<LuCalendarCheck2 className="ml-auto !w-6 !h-6" />
									</button>
								</FormControl>
							</div>
						</PopoverTrigger>

						<PopoverContent className="w-auto p-0" align="start">
							<div className="sm:flex">
								<Calendar
									mode="single"
									locale={vi}
									fixedWeeks
									selected={field.value?.date}
									onSelect={(date) => {
										if (date) field.onChange({ ...field.value, date });
									}}
									initialFocus
									disabled={isDateDisabled}
									className="p-4"
									classNames={{
										months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
										month: "space-y-4",
										caption: "flex justify-center pt-1 relative items-center h-10 mb-4",
										caption_label: " font-semibold text-lg",
										nav: "space-x-1 flex items-center",
										nav_button: cn(
											"h-7 w-7 bg-transparent p-0 text-black hover:bg-[#F24444]/10 hover:text-[#F24444] transition-colors",
										),
										nav_button_previous: "absolute left-1",
										nav_button_next: "absolute right-1",
										table: "w-full border-collapse space-y-1",
										head_row: "flex",
										head_cell: " font-semibold text-black w-9 text-[15px] m-0.5 py-2",
										row: "flex w-full mt-2",
										cell: cn(
											"relative p-0 text-center text-[17px]  hover:bg-[#F24444]/10 hover:text-[#F24444] m-0.5",
											"focus-within:relative focus-within:z-20",
										),
										day: cn(
											"h-9 w-9 p-0 font-semibold hover:bg-[#F24444]/10 hover:text-[#F24444] transition-colors",
											"aria-selected:bg-[#F24444] aria-selected:text-white aria-selected:hover:bg-[#F24444] aria-selected:hover:text-white",
										),
										day_today: "bg-[#F24444]/10 text-[#F24444]",
										day_outside: "text-muted-foreground opacity-50",
										day_disabled: "text-muted-foreground opacity-50",
										day_hidden: "invisible",
									}}
								/>
								<ScrollArea className={"w-full h-96 my-4"}>
									<div className="flex flex-col">
										{[...amTimeSlots, ...pmTimeSlots].map((slot) => (
											<Button
												key={slot}
												variant="ghost"
												className={cn(
													"h-10 mx-4 justify-center font-medium text-[17px] tracking-wide rounded-none text-black",
													field.value?.time === slot
														? "bg-[#F24444] text-white hover:bg-[#F24444] hover:text-white"
														: "hover:bg-[#F24444]/10 hover:text-[#F24444]",
													isTimeDisabled(slot) && "opacity-50 cursor-not-allowed",
												)}
												onClick={() => {
													if (!isTimeDisabled(slot)) {
														field.onChange({
															...field.value,
															time: slot,
														});
														setIsCalendarOpen(false);
													}
												}}
												disabled={isTimeDisabled(slot)}
											>
												{slot}
											</Button>
										))}
									</div>
									<ScrollBar />
								</ScrollArea>
							</div>
							<div className="bg-[#F24444] px-4 py-2 text-right text-white font-medium text-base">
								{field.value?.date ? format(field.value?.date, "dd/MM/yyyy", { locale: vi }) : "DD/MM/YYYY"},{" "}
								{field.value?.time || "Chọn giờ"}
							</div>
						</PopoverContent>
					</Popover>

					<MyFormMessage errorColor={errorColor} />
				</FormItem>
			)}
		/>
	);
};

export const VerticalDateTimePicker = <T extends FieldValues>({
	form,
	name,
	label,
	required = false,
	className,
	labelColor = "black",
	errorColor = "red",
	labelClassName,
}: DateTimePickerProps<T>) => {
	const { isCalendarOpen, setIsCalendarOpen, isDateDisabled, isTimeDisabled } = useDateTimePicker(form, name);

	return (
		<FormField
			control={form.control}
			name={name}
			render={({ field }) => (
				<FormItem className={cn("flex flex-col text-base font-medium", className)}>
					<MyFormLabel label={label} labelColor={labelColor} className={labelClassName} required={required} />

					<Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
						<PopoverTrigger asChild>
							<FormControl>
								<button
									type="button"
									className={cn(
										"text-base font-medium",
										"border border-black rounded-md shadow-elevation",
										"flex items-center justify-between w-full h-12 px-3 py-2",
										"focus-visible:outline-none focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
									)}
								>
									<ConditionalRenderer
										condition={!field.value || !field.value.date || !field.value.time}
										component={<span className="text-black/60">Chọn thời gian liên hệ</span>}
										fallback={<span>{getDateTimeString(field.value?.date, field.value?.time)}</span>}
									/>
									<LuCalendarCheck2 className="ml-auto !w-6 !h-6" />
								</button>
							</FormControl>
						</PopoverTrigger>

						<PopoverContent className="w-auto p-0" align="start">
							<div className="sm:flex">
								<Calendar
									mode="single"
									locale={vi}
									fixedWeeks
									selected={field.value?.date}
									onSelect={(date) => {
										if (date) field.onChange({ ...field.value, date });
									}}
									initialFocus
									disabled={isDateDisabled}
									className="p-4"
									classNames={{
										months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
										month: "space-y-4",
										caption: "flex justify-center pt-1 relative items-center h-10 mb-4",
										caption_label: " font-semibold text-lg",
										nav: "space-x-1 flex items-center",
										nav_button: cn(
											"h-7 w-7 bg-transparent p-0 text-black hover:bg-[#F24444]/10 hover:text-[#F24444] transition-colors",
										),
										nav_button_previous: "absolute left-1",
										nav_button_next: "absolute right-1",
										table: "w-full border-collapse space-y-1",
										head_row: "flex",
										head_cell: " font-semibold text-black w-9 text-[15px] m-0.5 py-2",
										row: "flex w-full mt-2",
										cell: cn(
											"relative p-0 text-center text-[17px]  hover:bg-[#F24444]/10 hover:text-[#F24444] m-0.5",
											"focus-within:relative focus-within:z-20",
										),
										day: cn(
											"h-9 w-9 p-0 font-semibold hover:bg-[#F24444]/10 hover:text-[#F24444] transition-colors",
											"aria-selected:bg-[#F24444] aria-selected:text-white aria-selected:hover:bg-[#F24444] aria-selected:hover:text-white",
										),
										day_today: "bg-[#F24444]/10 text-[#F24444]",
										day_outside: "text-muted-foreground opacity-50",
										day_disabled: "text-muted-foreground opacity-50",
										day_hidden: "invisible",
									}}
								/>
								<ScrollArea className={"w-full h-96 my-4"}>
									<div className="flex flex-col">
										{[...amTimeSlots, ...pmTimeSlots].map((slot) => (
											<Button
												key={slot}
												variant="ghost"
												className={cn(
													"h-10 mx-4 justify-center font-medium text-[17px] tracking-wide rounded-none text-black",
													field.value?.time === slot
														? "bg-[#F24444] text-white hover:bg-[#F24444] hover:text-white"
														: "hover:bg-[#F24444]/10 hover:text-[#F24444]",
													isTimeDisabled(slot) && "opacity-50 cursor-not-allowed",
												)}
												onClick={() => {
													if (!isTimeDisabled(slot)) {
														field.onChange({
															...field.value,
															time: slot,
														});
														setIsCalendarOpen(false);
													}
												}}
												disabled={isTimeDisabled(slot)}
											>
												{slot}
											</Button>
										))}
									</div>
									<ScrollBar />
								</ScrollArea>
							</div>
							<div className="bg-[#F24444] px-4 py-2 text-right text-white font-medium text-base">
								{field.value?.date ? format(field.value?.date, "dd/MM/yyyy", { locale: vi }) : "DD/MM/YYYY"},{" "}
								{field.value?.time || "Chọn giờ"}
							</div>
						</PopoverContent>
					</Popover>

					<MyFormMessage errorColor={errorColor} />
				</FormItem>
			)}
		/>
	);
};

function getDateTimeString(date?: Date, timeSlot?: string) {
	if (!date || !timeSlot) return "Chọn thời gian liên hệ";
	return `${format(date, "dd/MM/yyyy", { locale: vi })} ${timeSlot}`;
}
