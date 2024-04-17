function About() {
  const styles = {
    title:'mt-10 text-7xl font-bold mb-8  justify-center flex items-center',
    subtitle: 'text-2xl text-gray-500 font-semibold mb-8',
    title2: 'mt-10 text-4xl font-bold mb-8  justify-center flex items-center',
    valores: 'text-2xl font-semibold mb-8'
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className={styles.title}>Conócenos</h1>
      <p className={styles.subtitle}>Somos una empresa dedicada al desarrollo y gestion de software encargada de solucionar y satisfacer las necesidades de nuestros clientes .</p>
      <div className="flex justify-around w-[85%] my-12 ">
      <section className="mb-12 bg-white shadow-2xl px-12 py-5 ">
        <h2 className={styles.title2}>Nuestra Misión</h2>
        <p className={styles.subtitle}>Que cada cliente quede satisfecho con su compra.</p>
      </section>
      <section className="mb-12 bg-white shadow-2xl px-12 py-5">
        <h2 className={styles.title2}>Nuestra Visión</h2>
        <p className={styles.subtitle}>Ser el distribuidor número uno de las marcas que representamos.</p>
      </section>
      </div>
      <section className="mb-12 w-[80%]">
        <h2 className={styles.title2}>Nuestros Valores</h2>
        <div className="flex justify-around w-[100%]">
          <p className={styles.valores + " hover:scale-105 duration-300 shadow-2xl text-black bg-white px-12 py-8"}>Respeto</p>
          <p className={styles.valores + " hover:scale-105 duration-300 shadow-2xl text-black bg-white px-12 py-8"}>Honestidad</p>
          <p className={styles.valores + " hover:scale-105 duration-300 shadow-2xl text-black bg-white px-12 py-8"}>Constancia</p>
          <p className={styles.valores + " hover:scale-105 duration-300 shadow-2xl text-black bg-white px-12 py-8"}>Lealtad</p>
          <p className={styles.valores + " hover:scale-105 duration-300 shadow-2xl text-black bg-white px-12 py-8"}>Sencillez</p>
        </div>
      </section>
      <section className="mb-12">
        <h2 className={styles.title}>Nuestro Equipo</h2>
        <p className={styles.subtitle}>Nuestro equipo de expertos es altamente comprometido con la excelencia y la satisfacción de nuestros clientes. Nos aseguramos de que cada proyecto sea un éxito.</p>
        
      </section>
    </div>
  )
}

export default About