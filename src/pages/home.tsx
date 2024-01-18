import { ShoppingCart, Package, Timer, Coffee, MapPin } from "@phosphor-icons/react"

import Image from '../assets/image.png';
import Logo from '../assets/Logo.png';

export default function Home() {
  return (
    <main className="w-full h-screen bg-base-background">
      <nav className="w-full py-8">
        <div className="max-w-[1120px] w-full m-auto flex itesm-center justify-between">
          <img src={Logo} alt="Coffee delivery logo" />

          <ul className="flex gap-4">
            <li>
              <button className="p-2 flex gap-1 items-center bg-brand-Purple-light rounded-sm text-brand-purple-dark text-sm">
                <MapPin fontWeight="bold" size={16} />

                Curitiba, PR
              </button>
            </li>
            <li>

            </li>
          </ul>
        </div>
      </nav>
      <header className="w-full h-[544px] bg-[url('/src/assets/background.svg')] bg-cover bg-no-repeat">
        <div className="max-w-[1120px] w-full h-full m-auto flex items-center justify-between">
          <div>
            <h1 className="text-base-text text-4xl font-bold font-baloo-2">
              Encontre o café perfeito <br />
              para qualquer hora do dia
            </h1>
            <p className="mt-4 text-base-text text-lg">
              Com o Coffee Delivery você recebe seu café onde estiver, a <br />
              qualquer hora
            </p>

            <div className="mt-16 grid grid-cols-2 gap-10">
              <div className="flex gap-4 items-center">
                <div className="w-8 h-8 rounded-full bg-brand-yellow-dark flex items-center justify-center">
                  <ShoppingCart size={16} color="#fff" />
                </div>

                <p className="text-base-text text-base">Compra simples e segura</p>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-8 h-8 rounded-full bg-base-text flex items-center justify-center">
                  <Package size={16} color="#fff" />
                </div>

                <p className="text-base-text text-base">Compra simples e segura</p>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-8 h-8 rounded-full bg-brand-yellow flex items-center justify-center">
                  <Timer size={16} color="#fff" />
                </div>

                <p className="text-base-text text-base">Compra simples e segura</p>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center">
                  <Coffee size={16} color="#fff" />
                </div>

                <p className="text-base-text text-base">Compra simples e segura</p>
              </div>
            </div>
          </div>
          <img src={Image} alt="" />
        </div>
      </header>
    </main>
  )
}