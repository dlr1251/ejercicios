import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import Animal from '../components/Animal'

export default function Home() {

  const animales = [
    {
      nombre: 'oso',
      descripcion: 'descripcion del oso',
      image: 'bear.jpg'
    },
    {
      nombre: 'gato monteshhhh',
      descripcion: 'descripcion del gato',
      image: 'cat.jpg'

    },
    {
      nombre: 'cerdo',
      descripcion: 'descripcion del cerdo',
      image: 'pig.jpg'
    },
    {
      nombre: 'vaca',
      descripcion: 'descripcion del vaca',
      image: 'cow.jpg'

    },
    {
      nombre: 'lobo',
      descripcion: 'descripcion del lobo',
      image: 'wolf.jpg'
    },
  ]


  return (
    <Layout>
      <h1>Este es la página Home</h1>
      {
        animales.map( (animal, i) => {
          return (
            <Animal
              key={i} 
              title={animal.nombre}
              descripcion={animal.descripcion}
              image={animal.image}
            />
          )

        } )
      }
      
     
    </Layout>
  )
}
