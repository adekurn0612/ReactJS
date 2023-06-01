import React, { useState } from 'react'

const ListProduct = () => {

    const productList = [        
        { id: 1, name: "laptop", harga: 200, jumlah: 9, like :0 },        
        { id: 2, name: "iphone", harga: 200, jumlah: 9 ,like :0},        
        { id: 3, name: "watch", harga: 200, jumlah: 9 ,like :0},    
    ]

    const [products, setProducts] = useState(productList)

    const tambah = (id) => {
        setProducts([
            ...products.map((p) => {
                if (p.id === id) {
                    p.jumlah = p.jumlah + 1;
                    return p;
                } else {
                    return p;
                }
            })
        ])
    }

    const kurang = (id) => {
        setProducts([
            ...products.map((p) => {
                if (p.id === id) {
                    p.jumlah = p.jumlah -1;
                    return p;
                } else {
                    return p;
                }
            })
        ])
    }

    const tambahLike = (id) => {
        setProducts([
            ...products.map((p) => {
                if (p.id === id) {
                    p.like = p.like + 1;
                    return p;
                } else {
                    return p;
                }
            })
        ])
    }

    const kurangLike = (id) => {
        setProducts([
            ...products.map((p) => {
                if (p.id === id) {
                    p.like = p.like - 1;
                    return p;
                } else {
                    return p;
                }
            })
        ])
    }
    


    return (
        <div>
            <h1>Daftar Product</h1>
            <ul>
                {products.map(p =>
                    <ul >
                        <li>nama : {p.name}</li>
                        <li>harga : {p.harga}</li>
                        <li>jumlah : {p.jumlah}</li>
                       
                        <li>
                        <button onClick={()=>tambah(p.id)} >+</button>
                        <button onClick={()=>kurang(p.id)}>-</button>
                        </li>
                        <li>like : {p.like}</li>
                        <li>
                        <button onClick={()=>tambahLike(p.id)} >tambah like</button>
                        <button onClick={()=>kurangLike(p.id)}>kurangi like</button>
                        </li>
                    </ul>

                )}
            </ul>
        </div>
    )
}

export default ListProduct
