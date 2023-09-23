

import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`flex flex-wrap sm:justify-between justify-center items-center my-4`}>
    {
      clients.map((cli) => (
        <div key={cli.id} className="hover:bg-slate-500  cursor-pointer rounded-lg" >
          <img src={cli.logo} className="flex-1  w-[150px] sm:w-[170px] p-4" />
        </div>
      ))
    }
  </section >
);

export default Clients;
