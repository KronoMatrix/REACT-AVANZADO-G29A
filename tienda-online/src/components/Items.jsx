import './Products.css'
import { AddToCartIcon } from './icons'

const Items = () => {
  return (
    <main className='items'>
        <ul>
            {Items.map( product => (
                <li key={product.id}>
                    <img src={product.image} 
                    alt={product.product_name} 
                    />
                    <div>
                        <strong>{product.image}</strong>
                    </div>
                    <div>
                        <button>
                            <AddToCartIcon />
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    </main>
  )
}

export default Items