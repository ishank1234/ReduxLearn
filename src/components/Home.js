import React from 'react'

function Home() {
  return (
    <div>
        <h1>Home Component</h1>
        <div className='add-to-cart'>
            <img className='cartImg' src="https://static.vecteezy.com/system/resources/thumbnails/002/285/474/small/shopping-cart-with-goods-in-flat-modern-design-colored-icon-isolated-white-background-vector.jpg"></img>
        </div>
        <div className='cart-wrapper'>
            <div className='img-wrapper item'>
                <img className='img' src = "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ></img>
            </div>
            <div className='text-wrapper item'>
                <span>
                    I-Phone
                </span>
                <span>
                    Price: $1000.00
                </span>
            </div>
            <div className='btn-wrapper item'>
                <button className='btn btn-primary button'>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Home