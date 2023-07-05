
import styles from "./Cta.module.css";
const Cta = () => {
    return (
        <div>
          

<section
  className="overflow-hidden bg-[url(https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80)] bg-fixed bg-cover bg-top bg-no-repeat"
>
  <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24 relative">
    <div className="text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
        Latest Shirts
      </h2>

      <p
        className="hidden  text-white/90  text-center md:mt-6 md:block md:text-lg md:leading-relaxed"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore <br/>
        officia corporis quasi doloribus iure architecto quae voluptatum beatae <br/>
        excepturi dolores.
      </p>

      <div className="mt-4 sm:mt-8">
        <a
          href="#"
          className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Yours Today
        </a>
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default Cta;