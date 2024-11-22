import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Slider from '../components/Slider'

function Home() {
  return (
    <>
        <Hero
        title="Modern Interior"
        subTitle="Design Studio"
        description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique."
        imgSrc="images/couch.png"
      />
 <div className="product-section">
			<div className="container">
				<div className="row">

			
					<div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
						<h2 className="mb-4 section-title">Crafted with excellent material.</h2>
						<p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
						<p><Link href="shop.html" className="btn">Explore</Link></p>
					</div> 
				

				
					<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
						<Link class="product-item" href="cart.html">
							<img src="images/product-1.png" className="img-fluid product-thumbnail" />
							<h3 className="product-title">Nordic Chair</h3>
							<strong className="product-price">$50.00</strong>

							<span className="icon-cross">
								<img src="images/cross.svg" className="img-fluid" />
							</span>
						</Link>
					</div> 
				

					
					<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
						<Link class="product-item" href="cart.html">
							<img src="images/product-2.png" className="img-fluid product-thumbnail" />
							<h3 className="product-title">Kruzo Aero Chair</h3>
							<strong className="product-price">$78.00</strong>

							<span className="icon-cross">
								<img src="images/cross.svg" className="img-fluid" />
							</span>
						</Link>
					</div>
			

					
					<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
						<Link class="product-item" href="cart.html">
							<img src="images/product-3.png" className="img-fluid product-thumbnail" />
							<h3 className="product-title">Ergonomic Chair</h3>
							<strong className="product-price">$43.00</strong>

							<span className="icon-cross">
								<img src="images/cross.svg" className="img-fluid" />
							</span>
						</Link>
					</div>
				

				</div>
			</div>
		</div>

<div className="why-choose-section">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-lg-6">
						<h2 className="section-title">Why Choose Us</h2>
						<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

						<div className="row my-5">
							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src="images/truck.svg" alt="Image" className="imf-fluid" />
									</div>
									<h3>Fast &amp; Free Shipping</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src="images/bag.svg" alt="Image" className="imf-fluid" />
									</div>
									<h3>Easy to Shop</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src="images/support.svg" alt="Image" className="imf-fluid" />
									</div>
									<h3>24/7 Support</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src="images/return.svg" alt="Image" className="imf-fluid" />
									</div>
									<h3>Hassle Free Returns</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

						</div>
					</div>

					<div className="col-lg-5">
						<div className="img-wrap">
							<img src="images/why-choose-us-img.jpg" alt="Image" className="img-fluid" />
						</div>
					</div>

				</div>
			</div>
		</div>

<div className="we-help-section">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-lg-7 mb-5 mb-lg-0">
						<div className="imgs-grid">
							<div class="grid grid-1"><img src="images/img-grid-1.jpg" alt="Untree.co" /></div>
							<div class="grid grid-2"><img src="images/img-grid-2.jpg" alt="Untree.co" /></div>
							<div class="grid grid-3"><img src="images/img-grid-3.jpg" alt="Untree.co" /></div>
						</div>
					</div>
					<div className="col-lg-5 ps-lg-5">
						<h2 className="section-title mb-4">We Help You Make Modern Interior Design</h2>
						<p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio ques nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada</p>

						<ul className="list-unstyled custom-list my-4">
							<li>Donec vitae odio quis nisl dapibus malesuada</li>
							<li>Donec vitae odio quis nisl dapibus malesuada</li>
							<li>Donec vitae odio quis nisl dapibus malesuada</li>
							<li>Donec vitae odio quis nisl dapibus malesuada</li>
						</ul>
						<p><Link herf="#" className="btn">Explore</Link></p>
					</div>
				</div>
			</div>
		</div>

<div className="popular-product">
			<div className="container">
				<div className="row">

					<div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
						<div className="product-item-sm d-flex">
							<div className="thumbnail">
								<img src="images/product-1.png" alt="Image" className="img-fluid" />
							</div>
							<div className="pt-3">
								<h3>Nordic Chair</h3>
								<p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
								<p><Link href="#">Read More</Link></p>
							</div>
						</div>
					</div>

					<div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
						<div className="product-item-sm d-flex">
							<div className="thumbnail">
								<img src="images/product-2.png" alt="Image" className="img-fluid" />
							</div>
							<div className="pt-3">
								<h3>Kruzo Aero Chair</h3>
								<p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
								<p><Link href="#">Read More</Link></p>
							</div>
						</div>
					</div>

					<div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
						<div className="product-item-sm d-flex">
							<div className="thumbnail">
								<img src="images/product-3.png" alt="Image" className="img-fluid" />
							</div>
							<div className="pt-3">
								<h3>Ergonomic Chair</h3>
								<p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
								<p><Link href="#">Read More</Link></p>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
		<Slider/>

<div className="blog-section">
			<div className="container">
				<div className="row mb-5">
					<div className="col-md-6">
						<h2 className="section-title">Recent Blog</h2>
					</div>
					<div className="col-md-6 text-start text-md-end">
						<Link href="#" className="more">View All Posts</Link>
					</div>
				</div>

				<div className="row">

					<div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
						<div className="post-entry">
							<Link href="#" className="post-thumbnail"><img src="images/post-1.jpg" alt="Image" class="img-fluid" /></Link>
							<div className="post-content-entry">
								<h3><Link href="#">First Time Home Owner Ideas</Link></h3>
								<div className="meta">
									<span>by <Link href="#">Kristin Watson</Link></span> <span>on <Link href="#">Dec 19, 2021</Link></span>
								</div>
							</div>
						</div>
					</div>

					<div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
						<div className="post-entry">
							<Link href="#" className="post-thumbnail"><img src="images/post-2.jpg" alt="Image" class="img-fluid" /></Link>
							<div className="post-content-entry">
								<h3><Link href="#">How To Keep Your Furniture Clean</Link></h3>
								<div className="meta">
									<span>by <Link href="#">Robert Fox</Link></span> <span>on <Link href="#">Dec 15, 2021</Link></span>
								</div>
							</div>
						</div>
					</div>

					<div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
						<div className="post-entry">
							<Link href="#" className="post-thumbnail"><img src="images/post-3.jpg" alt="Image" class="img-fluid" /></Link>
							<div className="post-content-entry">
								<h3><Link href="#">Small Space Furniture Apartment Ideas</Link></h3>
								<div className="meta">
									<span>by <Link href="#">Kristin Watson</Link></span> <span>on <Link href="#">Dec 12, 2021</Link></span>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
		
    </>
  )
}

export default Home
