import { cn } from "@/lib/utils";
import type React from "react";

export default function IntlTravelFeePage() {
	return (
		<main className="bg-white px-28 py-8 space-y-12">
			<header>
				<h2 className="text-5xl font-bold text-brand-redSecondary text-center leading-tight uppercase">
					Biểu phí và số tiền bảo hiểm
				</h2>
			</header>

			<section id="group-insurance" className="space-y-8">
				<header>
					<h3 className="text-3xl font-bold text-brand-redSecondary">I. Biểu Phí Bảo Hiểm Của Nhóm</h3>
				</header>

				<article className="space-y-8">
					<h4 className="text-3xl font-bold text-brand-redSecondary">1. Biểu phí (USD)</h4>
					<div className="space-y-1">
						<div className="text-2xl italic font-medium text-black text-right">Đơn vị tính: USD</div>
						<TableRoot>
							<TableHeader>
								<TableRow>
									<ColumnHeaderCell size="large" className="border border-black" rowSpan={2}>
										Biểu Phí Nhóm
									</ColumnHeaderCell>
									<ColumnHeaderCell colSpan={2} size="large" className="border border-black">
										Đông Nam Á
									</ColumnHeaderCell>
									<ColumnHeaderCell colSpan={2} size="large" className="border border-black">
										Châu Á
									</ColumnHeaderCell>
									<ColumnHeaderCell colSpan={2} size="large" className="border border-black">
										Toàn Cầu
									</ColumnHeaderCell>
								</TableRow>
								<TableRow>
									<ColumnHeaderCell size="medium" className="border border-black">
										Cơ Bản 1
									</ColumnHeaderCell>
									<ColumnHeaderCell size="medium" className="border border-black">
										Cơ Bản 2
									</ColumnHeaderCell>
									<ColumnHeaderCell size="medium" className="border border-black">
										Cơ Bản 1
									</ColumnHeaderCell>
									<ColumnHeaderCell size="medium" className="border border-black">
										Cơ Bản 2
									</ColumnHeaderCell>
									<ColumnHeaderCell size="medium" className="border border-black">
										Cơ Bản 1
									</ColumnHeaderCell>
									<ColumnHeaderCell size="medium" className="border border-black">
										Cơ Bản 2
									</ColumnHeaderCell>
								</TableRow>
							</TableHeader>
							<TableBody>
								<TableRow>
									<TableCell size="medium">1 đến 3 ngày</TableCell>
									<TableCell>2</TableCell>
									<TableCell>4</TableCell>
									<TableCell>3</TableCell>
									<TableCell>5</TableCell>
									<TableCell>3</TableCell>
									<TableCell>6</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">4 đến 6 ngày</TableCell>
									<TableCell>3</TableCell>
									<TableCell>5</TableCell>
									<TableCell>4</TableCell>
									<TableCell>7</TableCell>
									<TableCell>4</TableCell>
									<TableCell>8</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">7 đến 10 ngày</TableCell>
									<TableCell>3</TableCell>
									<TableCell>7</TableCell>
									<TableCell>5</TableCell>
									<TableCell>9</TableCell>
									<TableCell>5</TableCell>
									<TableCell>10</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">11 đến 14 ngày</TableCell>
									<TableCell>5</TableCell>
									<TableCell>8</TableCell>
									<TableCell>6</TableCell>
									<TableCell>12</TableCell>
									<TableCell>7</TableCell>
									<TableCell>13</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">15 đến 18 ngày</TableCell>
									<TableCell>5</TableCell>
									<TableCell>10</TableCell>
									<TableCell>7</TableCell>
									<TableCell>14</TableCell>
									<TableCell>8</TableCell>
									<TableCell>15</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">19 đến 22 ngày</TableCell>
									<TableCell>6</TableCell>
									<TableCell>11</TableCell>
									<TableCell>8</TableCell>
									<TableCell>15</TableCell>
									<TableCell>9</TableCell>
									<TableCell>17</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">23 đến 27 ngày</TableCell>
									<TableCell>7</TableCell>
									<TableCell>14</TableCell>
									<TableCell>10</TableCell>
									<TableCell>19</TableCell>
									<TableCell>11</TableCell>
									<TableCell>21</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">28 đến 31 ngày</TableCell>
									<TableCell>8</TableCell>
									<TableCell>14</TableCell>
									<TableCell>11</TableCell>
									<TableCell>20</TableCell>
									<TableCell>12</TableCell>
									<TableCell>22</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">32 đến 45 ngày</TableCell>
									<TableCell>8</TableCell>
									<TableCell>16</TableCell>
									<TableCell>12</TableCell>
									<TableCell>23</TableCell>
									<TableCell>13</TableCell>
									<TableCell>25</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">46 đến 60 ngày</TableCell>
									<TableCell>10</TableCell>
									<TableCell>20</TableCell>
									<TableCell>14</TableCell>
									<TableCell>27</TableCell>
									<TableCell>16</TableCell>
									<TableCell>30</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">61 đến 90 ngày</TableCell>
									<TableCell>11</TableCell>
									<TableCell>21</TableCell>
									<TableCell>15</TableCell>
									<TableCell>29</TableCell>
									<TableCell>17</TableCell>
									<TableCell>32</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">91 đến 120 ngày</TableCell>
									<TableCell>14</TableCell>
									<TableCell>27</TableCell>
									<TableCell>20</TableCell>
									<TableCell>37</TableCell>
									<TableCell>22</TableCell>
									<TableCell>41</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">121 đến 150 ngày</TableCell>
									<TableCell>18</TableCell>
									<TableCell>34</TableCell>
									<TableCell>25</TableCell>
									<TableCell>48</TableCell>
									<TableCell>28</TableCell>
									<TableCell>53</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">151 đến 180 ngày</TableCell>
									<TableCell>22</TableCell>
									<TableCell>42</TableCell>
									<TableCell>31</TableCell>
									<TableCell>58</TableCell>
									<TableCell>34</TableCell>
									<TableCell>64</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">Một tuần kéo dài thêm</TableCell>
									<TableCell>3</TableCell>
									<TableCell>7</TableCell>
									<TableCell>5</TableCell>
									<TableCell>9</TableCell>
									<TableCell>5</TableCell>
									<TableCell>10</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">Một năm</TableCell>
									<TableCell>29</TableCell>
									<TableCell>55</TableCell>
									<TableCell>40</TableCell>
									<TableCell>76</TableCell>
									<TableCell>44</TableCell>
									<TableCell>84</TableCell>
								</TableRow>
							</TableBody>
						</TableRoot>
					</div>
				</article>

				<article className="space-y-4">
					<h4 className="text-3xl font-bold text-brand-redSecondary">
						2. Công thức tính phí nhóm cho các hợp đồng bao với công ty du lịch
					</h4>
					<div className="border border-black px-8 py-4">
						<span className="text-3xl font-semibold text-black">
							Phí nhóm = Phí bảo hiểm trên biểu phí x Tổng số người của nhóm
						</span>
					</div>
				</article>

				<article className="space-y-4">
					<h4 className="text-3xl font-bold text-brand-redSecondary">3. Công thức giảm phí</h4>
					<div className="border border-black px-8 py-4 text-center">
						<span className="text-3xl font-semibold text-black">Tổng phí giảm = Phí nhóm x Phần trăm giảm phí</span>
					</div>
				</article>

				<article className="space-y-4">
					<h4 className="text-3xl font-bold text-brand-redSecondary">4. Bảng tỷ lệ giảm phí</h4>
					<TableRoot>
						<TableHeader>
							<TableRow>
								<ColumnHeaderCell size="large" className="border border-black w-1/2">
									Tổng Số Khách Trong Năm
								</ColumnHeaderCell>
								<ColumnHeaderCell size="large" className="border border-black">
									Tỷ Lệ Giảm Phí
								</ColumnHeaderCell>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell size="medium" className="py-2">
									Từ 1 đến 400
								</TableCell>
								<TableCell size="medium" className="py-2">
									2%
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell size="medium" className="py-2">
									Từ 401 đến 1000
								</TableCell>
								<TableCell size="medium" className="py-2">
									4%
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell size="medium" className="py-2">
									Từ 1001 đến 1500
								</TableCell>
								<TableCell size="medium" className="py-2">
									10%
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell size="medium" className="py-2">
									Từ 1501 đến 2000
								</TableCell>
								<TableCell size="medium" className="py-2">
									15%
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell size="medium" className="py-2">
									Từ 2001 đến 5000
								</TableCell>
								<TableCell size="medium" className="py-2">
									20%
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell size="medium" className="py-2">
									Từ 5001 đến 10000
								</TableCell>
								<TableCell size="medium" className="py-2">
									25%
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell size="medium" className="py-2">
									Trên 10000
								</TableCell>
								<TableCell size="medium" className="py-2">
									30%
								</TableCell>
							</TableRow>
						</TableBody>
					</TableRoot>
				</article>
			</section>

			<section id="individual-insurance" className="space-y-8">
				<header>
					<h3 className="text-3xl font-bold text-brand-redSecondary">II. Biểu Phí Bảo Hiểm Của Cá Nhân</h3>
				</header>

				<article className="space-y-4">
					<h4 className="text-3xl font-bold text-brand-redSecondary">1. Biểu phí (USD)</h4>

					<section className="space-y-4">
						<h5 className="text-2xl font-semibold text-black ml-8">
							a. Vùng Đông Nam Á (Áp dụng cho các nước Malaysia, Indonesia, Thái Lan, Philippines, Myanmar, Singapore,
							Cambodia, Laos, Brunei, Đông Timor)
						</h5>
						<TableRoot>
							<TableHeader>
								<TableRow>
									<ColumnHeaderCell rowSpan={3} className="border border-black" size="large">
										Vùng Đông Nam Á (Asean)
									</ColumnHeaderCell>
									<ColumnHeaderCell colSpan={6} className="border border-black" size="large">
										Cá Nhân
									</ColumnHeaderCell>
								</TableRow>
								<TableRow>
									<ColumnHeaderCell colSpan={2} className="border border-black" size="large">
										Phổ Thông
									</ColumnHeaderCell>
									<ColumnHeaderCell colSpan={2} className="border border-black" size="large">
										Cao Cấp
									</ColumnHeaderCell>
									<ColumnHeaderCell colSpan={2} className="border border-black" size="large">
										Thượng Hạng
									</ColumnHeaderCell>
								</TableRow>
								<TableRow>
									<ColumnHeaderCell className="border border-black" size="medium">
										Cá Nhân
									</ColumnHeaderCell>
									<ColumnHeaderCell className="border border-black" size="medium">
										Gia Đình
									</ColumnHeaderCell>
									<ColumnHeaderCell className="border border-black" size="medium">
										Cá Nhân
									</ColumnHeaderCell>
									<ColumnHeaderCell className="border border-black" size="medium">
										Gia Đình
									</ColumnHeaderCell>
									<ColumnHeaderCell className="border border-black" size="medium">
										Cá Nhân
									</ColumnHeaderCell>
									<ColumnHeaderCell className="border border-black" size="medium">
										Gia Đình
									</ColumnHeaderCell>
								</TableRow>
							</TableHeader>
							<TableBody>
								<TableRow>
									<TableCell size="medium">1 đến 3 ngày</TableCell>
									<TableCell>6</TableCell>
									<TableCell>11</TableCell>
									<TableCell>11</TableCell>
									<TableCell>21</TableCell>
									<TableCell>16</TableCell>
									<TableCell>30</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">4 đến 6 ngày</TableCell>
									<TableCell>9</TableCell>
									<TableCell>17</TableCell>
									<TableCell>16</TableCell>
									<TableCell>30</TableCell>
									<TableCell>23</TableCell>
									<TableCell>43</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">7 đến 10 ngày</TableCell>
									<TableCell>11</TableCell>
									<TableCell>21</TableCell>
									<TableCell>20</TableCell>
									<TableCell>37</TableCell>
									<TableCell>28</TableCell>
									<TableCell>53</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">11 đến 14 ngày</TableCell>
									<TableCell>14</TableCell>
									<TableCell>26</TableCell>
									<TableCell>24</TableCell>
									<TableCell>46</TableCell>
									<TableCell>34</TableCell>
									<TableCell>65</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">15 đến 18 ngày</TableCell>
									<TableCell>16</TableCell>
									<TableCell>31</TableCell>
									<TableCell>28</TableCell>
									<TableCell>53</TableCell>
									<TableCell>41</TableCell>
									<TableCell>78</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">19 đến 22 ngày</TableCell>
									<TableCell>18</TableCell>
									<TableCell>35</TableCell>
									<TableCell>33</TableCell>
									<TableCell>62</TableCell>
									<TableCell>47</TableCell>
									<TableCell>89</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">23 đến 27 ngày</TableCell>
									<TableCell>22</TableCell>
									<TableCell>42</TableCell>
									<TableCell>39</TableCell>
									<TableCell>74</TableCell>
									<TableCell>57</TableCell>
									<TableCell>107</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">28 đến 31 ngày</TableCell>
									<TableCell>23</TableCell>
									<TableCell>44</TableCell>
									<TableCell>42</TableCell>
									<TableCell>79</TableCell>
									<TableCell>60</TableCell>
									<TableCell>114</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">32 đến 45 ngày</TableCell>
									<TableCell>27</TableCell>
									<TableCell>51</TableCell>
									<TableCell>48</TableCell>
									<TableCell>91</TableCell>
									<TableCell>69</TableCell>
									<TableCell>131</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">46 đến 60 ngày</TableCell>
									<TableCell>32</TableCell>
									<TableCell>61</TableCell>
									<TableCell>57</TableCell>
									<TableCell>107</TableCell>
									<TableCell>81</TableCell>
									<TableCell>154</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">61 đến 90 ngày</TableCell>
									<TableCell>34</TableCell>
									<TableCell>65</TableCell>
									<TableCell>61</TableCell>
									<TableCell>116</TableCell>
									<TableCell>88</TableCell>
									<TableCell>167</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">91 đến 120 ngày</TableCell>
									<TableCell>44</TableCell>
									<TableCell>84</TableCell>
									<TableCell>78</TableCell>
									<TableCell>148</TableCell>
									<TableCell>112</TableCell>
									<TableCell>214</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">121 đến 150 ngày</TableCell>
									<TableCell>57</TableCell>
									<TableCell>107</TableCell>
									<TableCell>100</TableCell>
									<TableCell>190</TableCell>
									<TableCell>144</TableCell>
									<TableCell>274</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">151 đến 180 ngày</TableCell>
									<TableCell>69</TableCell>
									<TableCell>131</TableCell>
									<TableCell>122</TableCell>
									<TableCell>231</TableCell>
									<TableCell>176</TableCell>
									<TableCell>333</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">Một tuần kéo dài thêm</TableCell>
									<TableCell>6</TableCell>
									<TableCell>11</TableCell>
									<TableCell>11</TableCell>
									<TableCell>21</TableCell>
									<TableCell>16</TableCell>
									<TableCell>30</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">Một năm</TableCell>
									<TableCell>90</TableCell>
									<TableCell>170</TableCell>
									<TableCell>159</TableCell>
									<TableCell>301</TableCell>
									<TableCell>229</TableCell>
									<TableCell>435</TableCell>
								</TableRow>
							</TableBody>
						</TableRoot>
					</section>

					<section className="space-y-4">
						<h5 className="text-2xl font-semibold text-black ml-8">
							b. Vùng Châu Á (Áp dụng cho các nước châu Á và thêm Australia, New Zealand trừ Nhật)
						</h5>
						<TableRoot>
							<TableHeader>
								<TableRow>
									<ColumnHeaderCell rowSpan={3} className="border border-black" size="large">
										Vùng Châu Á (Asia)
									</ColumnHeaderCell>
									<ColumnHeaderCell colSpan={6} className="border border-black" size="large">
										Cá Nhân
									</ColumnHeaderCell>
								</TableRow>
								<TableRow>
									<ColumnHeaderCell colSpan={2} className="border border-black" size="large">
										Phổ Thông
									</ColumnHeaderCell>
									<ColumnHeaderCell colSpan={2} className="border border-black" size="large">
										Cao Cấp
									</ColumnHeaderCell>
									<ColumnHeaderCell colSpan={2} className="border border-black" size="large">
										Thượng Hạng
									</ColumnHeaderCell>
								</TableRow>
								<TableRow>
									<ColumnHeaderCell className="border border-black" size="medium">
										Cá Nhân
									</ColumnHeaderCell>
									<ColumnHeaderCell className="border border-black" size="medium">
										Gia Đình
									</ColumnHeaderCell>
									<ColumnHeaderCell className="border border-black" size="medium">
										Cá Nhân
									</ColumnHeaderCell>
									<ColumnHeaderCell className="border border-black" size="medium">
										Gia Đình
									</ColumnHeaderCell>
									<ColumnHeaderCell className="border border-black" size="medium">
										Cá Nhân
									</ColumnHeaderCell>
									<ColumnHeaderCell className="border border-black" size="medium">
										Gia Đình
									</ColumnHeaderCell>
								</TableRow>
							</TableHeader>
							<TableBody>
								<TableRow>
									<TableCell size="medium">1 đến 3 ngày</TableCell>
									<TableCell>8</TableCell>
									<TableCell>15</TableCell>
									<TableCell>15</TableCell>
									<TableCell>29</TableCell>
									<TableCell>22</TableCell>
									<TableCell>41</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">4 đến 6 ngày</TableCell>
									<TableCell>13</TableCell>
									<TableCell>24</TableCell>
									<TableCell>22</TableCell>
									<TableCell>41</TableCell>
									<TableCell>32</TableCell>
									<TableCell>60</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">7 đến 10 ngày</TableCell>
									<TableCell>15</TableCell>
									<TableCell>29</TableCell>
									<TableCell>27</TableCell>
									<TableCell>51</TableCell>
									<TableCell>39</TableCell>
									<TableCell>74</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">11 đến 14 ngày</TableCell>
									<TableCell>19</TableCell>
									<TableCell>36</TableCell>
									<TableCell>33</TableCell>
									<TableCell>63</TableCell>
									<TableCell>48</TableCell>
									<TableCell>91</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">15 đến 18 ngày</TableCell>
									<TableCell>23</TableCell>
									<TableCell>43</TableCell>
									<TableCell>39</TableCell>
									<TableCell>74</TableCell>
									<TableCell>57</TableCell>
									<TableCell>108</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">19 đến 22 ngày</TableCell>
									<TableCell>25</TableCell>
									<TableCell>48</TableCell>
									<TableCell>45</TableCell>
									<TableCell>86</TableCell>
									<TableCell>65</TableCell>
									<TableCell>123</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">23 đến 27 ngày</TableCell>
									<TableCell>31</TableCell>
									<TableCell>58</TableCell>
									<TableCell>54</TableCell>
									<TableCell>103</TableCell>
									<TableCell>78</TableCell>
									<TableCell>149</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">28 đến 31 ngày</TableCell>
									<TableCell>32</TableCell>
									<TableCell>62</TableCell>
									<TableCell>58</TableCell>
									<TableCell>109</TableCell>
									<TableCell>83</TableCell>
									<TableCell>157</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">32 đến 45 ngày</TableCell>
									<TableCell>37</TableCell>
									<TableCell>70</TableCell>
									<TableCell>67</TableCell>
									<TableCell>127</TableCell>
									<TableCell>95</TableCell>
									<TableCell>181</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">46 đến 60 ngày</TableCell>
									<TableCell>44</TableCell>
									<TableCell>84</TableCell>
									<TableCell>78</TableCell>
									<TableCell>149</TableCell>
									<TableCell>113</TableCell>
									<TableCell>214</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">61 đến 90 ngày</TableCell>
									<TableCell>48</TableCell>
									<TableCell>91</TableCell>
									<TableCell>85</TableCell>
									<TableCell>161</TableCell>
									<TableCell>122</TableCell>
									<TableCell>231</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">91 đến 120 ngày</TableCell>
									<TableCell>61</TableCell>
									<TableCell>116</TableCell>
									<TableCell>108</TableCell>
									<TableCell>205</TableCell>
									<TableCell>156</TableCell>
									<TableCell>296</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">121 đến 150 ngày</TableCell>
									<TableCell>78</TableCell>
									<TableCell>149</TableCell>
									<TableCell>139</TableCell>
									<TableCell>263</TableCell>
									<TableCell>200</TableCell>
									<TableCell>380</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">151 đến 180 ngày</TableCell>
									<TableCell>95</TableCell>
									<TableCell>181</TableCell>
									<TableCell>168</TableCell>
									<TableCell>320</TableCell>
									<TableCell>243</TableCell>
									<TableCell>462</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">Một tuần kéo dài thêm</TableCell>
									<TableCell>8</TableCell>
									<TableCell>15</TableCell>
									<TableCell>15</TableCell>
									<TableCell>29</TableCell>
									<TableCell>22</TableCell>
									<TableCell>41</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">Một năm</TableCell>
									<TableCell>124</TableCell>
									<TableCell>236</TableCell>
									<TableCell>220</TableCell>
									<TableCell>417</TableCell>
									<TableCell>317</TableCell>
									<TableCell>602</TableCell>
								</TableRow>
							</TableBody>
						</TableRoot>
					</section>

					<section className="space-y-4">
						<h5 className="text-2xl font-semibold text-black ml-8">
							c. Toàn cầu (Áp dụng cho Nhật và các nước còn lại trên thế giới như Mỹ, Canada, Pháp, Anh, Đức)
						</h5>

						<TableRoot>
							<TableHeader>
								<TableRow>
									<ColumnHeaderCell rowSpan={3} className="border border-black" size="large">
										Toàn Cầu (Global)
									</ColumnHeaderCell>
									<ColumnHeaderCell colSpan={6} className="border border-black" size="large">
										Cá Nhân
									</ColumnHeaderCell>
								</TableRow>
								<TableRow>
									<ColumnHeaderCell colSpan={2} className="border border-black" size="large">
										Phổ Thông
									</ColumnHeaderCell>
									<ColumnHeaderCell colSpan={2} className="border border-black" size="large">
										Cao Cấp
									</ColumnHeaderCell>
									<ColumnHeaderCell colSpan={2} className="border border-black" size="large">
										Thượng Hạng
									</ColumnHeaderCell>
								</TableRow>
								<TableRow>
									<ColumnHeaderCell className="border border-black" size="medium">
										Cá Nhân
									</ColumnHeaderCell>
									<ColumnHeaderCell className="border border-black" size="medium">
										Gia Đình
									</ColumnHeaderCell>
									<ColumnHeaderCell className="border border-black" size="medium">
										Cá Nhân
									</ColumnHeaderCell>
									<ColumnHeaderCell className="border border-black" size="medium">
										Gia Đình
									</ColumnHeaderCell>
									<ColumnHeaderCell className="border border-black" size="medium">
										Cá Nhân
									</ColumnHeaderCell>
									<ColumnHeaderCell className="border border-black" size="medium">
										Gia Đình
									</ColumnHeaderCell>
								</TableRow>
							</TableHeader>
							<TableBody>
								<TableRow>
									<TableCell size="medium">1 đến 3 ngày</TableCell>
									<TableCell>9</TableCell>
									<TableCell>17</TableCell>
									<TableCell>17</TableCell>
									<TableCell>32</TableCell>
									<TableCell>24</TableCell>
									<TableCell>46</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">4 đến 6 ngày</TableCell>
									<TableCell>14</TableCell>
									<TableCell>27</TableCell>
									<TableCell>24</TableCell>
									<TableCell>46</TableCell>
									<TableCell>35</TableCell>
									<TableCell>67</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">7 đến 10 ngày</TableCell>
									<TableCell>17</TableCell>
									<TableCell>32</TableCell>
									<TableCell>30</TableCell>
									<TableCell>57</TableCell>
									<TableCell>43</TableCell>
									<TableCell>82</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">11 đến 14 ngày</TableCell>
									<TableCell>21</TableCell>
									<TableCell>40</TableCell>
									<TableCell>37</TableCell>
									<TableCell>70</TableCell>
									<TableCell>53</TableCell>
									<TableCell>101</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">15 đến 18 ngày</TableCell>
									<TableCell>25</TableCell>
									<TableCell>48</TableCell>
									<TableCell>43</TableCell>
									<TableCell>82</TableCell>
									<TableCell>63</TableCell>
									<TableCell>120</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">19 đến 22 ngày</TableCell>
									<TableCell>28</TableCell>
									<TableCell>53</TableCell>
									<TableCell>50</TableCell>
									<TableCell>95</TableCell>
									<TableCell>72</TableCell>
									<TableCell>137</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">23 đến 27 ngày</TableCell>
									<TableCell>34</TableCell>
									<TableCell>65</TableCell>
									<TableCell>60</TableCell>
									<TableCell>114</TableCell>
									<TableCell>87</TableCell>
									<TableCell>165</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">28 đến 31 ngày</TableCell>
									<TableCell>36</TableCell>
									<TableCell>68</TableCell>
									<TableCell>64</TableCell>
									<TableCell>122</TableCell>
									<TableCell>92</TableCell>
									<TableCell>175</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">32 đến 45 ngày</TableCell>
									<TableCell>41</TableCell>
									<TableCell>78</TableCell>
									<TableCell>74</TableCell>
									<TableCell>141</TableCell>
									<TableCell>106</TableCell>
									<TableCell>201</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">46 đến 60 ngày</TableCell>
									<TableCell>49</TableCell>
									<TableCell>93</TableCell>
									<TableCell>87</TableCell>
									<TableCell>165</TableCell>
									<TableCell>125</TableCell>
									<TableCell>238</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">61 đến 90 ngày</TableCell>
									<TableCell>53</TableCell>
									<TableCell>101</TableCell>
									<TableCell>94</TableCell>
									<TableCell>179</TableCell>
									<TableCell>135</TableCell>
									<TableCell>257</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">91 đến 120 ngày</TableCell>
									<TableCell>68</TableCell>
									<TableCell>129</TableCell>
									<TableCell>120</TableCell>
									<TableCell>228</TableCell>
									<TableCell>173</TableCell>
									<TableCell>329</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">121 đến 150 ngày</TableCell>
									<TableCell>87</TableCell>
									<TableCell>165</TableCell>
									<TableCell>154</TableCell>
									<TableCell>293</TableCell>
									<TableCell>222</TableCell>
									<TableCell>422</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">151 đến 180 ngày</TableCell>
									<TableCell>106</TableCell>
									<TableCell>201</TableCell>
									<TableCell>187</TableCell>
									<TableCell>355</TableCell>
									<TableCell>270</TableCell>
									<TableCell>513</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">Một tuần kéo dài thêm</TableCell>
									<TableCell>9</TableCell>
									<TableCell>17</TableCell>
									<TableCell>17</TableCell>
									<TableCell>32</TableCell>
									<TableCell>24</TableCell>
									<TableCell>46</TableCell>
								</TableRow>
								<TableRow>
									<TableCell size="medium">Một năm</TableCell>
									<TableCell>138</TableCell>
									<TableCell>262</TableCell>
									<TableCell>244</TableCell>
									<TableCell>464</TableCell>
									<TableCell>352</TableCell>
									<TableCell>669</TableCell>
								</TableRow>
							</TableBody>
						</TableRoot>
					</section>
				</article>

				<article className="space-y-4">
					<h4 className="text-3xl font-bold text-brand-redSecondary">2. Công thức tính phí cá nhân</h4>
					<div className="border border-black px-8 py-4 text-center">
						<span className="text-3xl font-semibold text-black">Phí cá nhân = Phí bảo hiểm trên biểu phí</span>
					</div>
				</article>

				<article className="space-y-4">
					<h4 className="text-3xl font-bold text-brand-redSecondary">3. Công thức tính phí cho nhóm cá nhân</h4>
					<div className="border border-black px-8 py-4 text-center">
						<span className="text-3xl font-semibold text-black">Phí nhóm = Phí cá nhân x Tổng số người của nhóm</span>
					</div>
				</article>

				<article className="space-y-4">
					<h4 className="text-3xl font-bold text-brand-redSecondary">4. Công thức giảm phí</h4>
					<div className="border border-black px-8 py-4 text-center">
						<span className="text-3xl font-semibold text-black">Phí giảm = Phí nhóm x Phần trăm giảm phí</span>
					</div>
				</article>

				<article className="space-y-4">
					<h4 className="text-3xl font-bold text-brand-redSecondary">5. Bảng tỷ lệ giảm phí</h4>
					<TableRoot>
						<TableHeader>
							<TableRow>
								<ColumnHeaderCell className="border border-black w-1/2" size="large">
									Tổng Số Khách/ Năm
								</ColumnHeaderCell>
								<ColumnHeaderCell className="border border-black" size="large">
									Tỷ Lệ Giảm Phí
								</ColumnHeaderCell>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell size="medium" className="py-2">
									Từ 2 đến 10
								</TableCell>
								<TableCell className="py-2">2%</TableCell>
							</TableRow>
							<TableRow>
								<TableCell size="medium" className="py-2">
									Từ 11 đến 100
								</TableCell>
								<TableCell className="py-2">5%</TableCell>
							</TableRow>
							<TableRow>
								<TableCell size="medium" className="py-2">
									Từ 101 đến 500
								</TableCell>
								<TableCell className="py-2">3%</TableCell>
							</TableRow>
							<TableRow>
								<TableCell size="medium" className="py-2">
									Từ 501 đến 1000
								</TableCell>
								<TableCell className="py-2">8%</TableCell>
							</TableRow>
							<TableRow>
								<TableCell size="medium" className="py-2">
									Từ 1001 đến 2000
								</TableCell>
								<TableCell className="py-2">12%</TableCell>
							</TableRow>
							<TableRow>
								<TableCell size="medium" className="py-2">
									Từ 2001 đến 5000
								</TableCell>
								<TableCell className="py-2">15%</TableCell>
							</TableRow>
							<TableRow>
								<TableCell size="medium" className="py-2">
									Trên 5000
								</TableCell>
								<TableCell className="py-2">20%</TableCell>
							</TableRow>
						</TableBody>
					</TableRoot>
				</article>
			</section>
		</main>
	);
}

function TableRoot({
	children,
	className,
	...props
}: { children: React.ReactNode; className?: string } & React.HTMLAttributes<HTMLTableElement>) {
	return (
		<table className={cn("min-w-full", className)} {...props}>
			{children}
		</table>
	);
}

function TableHeader({
	children,
	className,
	...props
}: { children: React.ReactNode; className?: string } & React.HTMLAttributes<HTMLTableSectionElement>) {
	return (
		<thead className={cn("bg-white", className)} {...props}>
			{children}
		</thead>
	);
}

function TableBody({
	children,
	className,
	...props
}: { children: React.ReactNode; className?: string } & React.HTMLAttributes<HTMLTableSectionElement>) {
	return (
		<tbody className={cn("bg-white", className)} {...props}>
			{children}
		</tbody>
	);
}

function TableRow({
	children,
	className,
	...props
}: { children: React.ReactNode; className?: string } & React.HTMLAttributes<HTMLTableRowElement>) {
	return (
		<tr className={cn(className)} {...props}>
			{children}
		</tr>
	);
}

function TableCell({
	children,
	className,
	size = "large",
	...props
}: {
	children?: React.ReactNode;
	className?: string;
	size?: "medium" | "large";
} & React.HTMLAttributes<HTMLTableCellElement>) {
	return (
		<td
			className={cn(
				"px-4 py-8 text-black text-center border border-black text-[25px] font-medium",
				size === "medium" && "text-[25px] font-semibold",
				className,
			)}
			{...props}
		>
			{children}
		</td>
	);
}

function ColumnHeaderCell({
	children,
	className,
	rowSpan,
	colSpan,
	size = "medium",
	...props
}: {
	children?: React.ReactNode;
	className?: string;
	rowSpan?: number;
	colSpan?: number;
	size?: "medium" | "large";
} & React.HTMLAttributes<HTMLTableCellElement>) {
	return (
		<th
			scope="col"
			className={cn(
				"px-4 py-8 text-center text-black",
				size === "medium" && "text-[25px] font-semibold",
				size === "large" && "text-[25px] font-bold uppercase",
				className,
			)}
			rowSpan={rowSpan}
			colSpan={colSpan}
			{...props}
		>
			{children}
		</th>
	);
}
