
function App() {
  return (
    <>
      <header class="py-5 header">
        <div class="container-xl">
          <div class="row justify-content-center justify-content-md-between">
            <div class="col-8 col-md-3">
              <a href="index.html">
                <img class="img-fluid" src="./public/img/Logitech-G-cyan-01.png" alt="imagen logo" />
              </a>
            </div>
            <nav class="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
              <div
                class="carrito"
              >
                <img class="img-fluid" src="./public/img/carrito.png" alt="imagen carrito" />

                <div id="carrito" class="bg-white p-3">
                  <p class="text-center">El carrito esta vacio</p>
                  <table class="w-100 table">
                    <thead>
                      <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img class="img-fluid" src="./public/img/audifono09.webp" alt="imagen audífono" />
                        </td>
                        <td>G335</td>
                        <td class="fw-bold">
                          $299
                        </td>
                        <td class="flex align-items-start gap-4">
                          <button
                            type="button"
                            class="btn btn-dark"
                          >
                            -
                          </button>
                          1
                          <button
                            type="button"
                            class="btn btn-dark"
                          >
                            +
                          </button>
                        </td>
                        <td>
                          <button
                            class="btn btn-danger"
                            type="button"
                          >
                            X
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <p class="text-end">Total pagar: <span class="fw-bold">$899</span></p>
                  <button class="btn btn-dark w-100 mt-3 p-2">Vaciar Carrito</button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <main class="container-xl mt-5">
        <h2 class="text-center">Nuestra Colección</h2>

        <div class="row mt-5">
          <div class="col-md-6 col-lg-4 my-4 row align-items-center">
            <div class="col-4">
              <img class="img-fluid" src="./public/img/audifono01.webp" alt="imagen audífono" />
            </div>
            <div class="col-8">
              <h3 class="text-black fs-4 fw-bold text-uppercase">Pro X2</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt</p>
              <p class="fw-black text-primary fs-3">$199</p>
              <button
                type="button"
                class="btn btn-dark w-100"
              >Agregar al Carrito</button>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 my-4 row align-items-center">
            <div class="col-4">
              <img class="img-fluid" src="./public/img/audifono02.webp" alt="imagen audífono" />
            </div>
            <div class="col-8">
              <h3 class="text-black fs-4 fw-bold text-uppercase">Astro A50</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt</p>
              <p class="fw-black text-primary fs-3">$299</p>
              <button
                type="button"
                class="btn btn-dark w-100 "
              >Agregar al Carrito</button>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 my-4 row align-items-center">
            <div class="col-4">
              <img class="img-fluid" src="./public/img/audifono03.webp" alt="imagen audífono" />
            </div>
            <div class="col-8">
              <h3 class="text-black fs-4 fw-bold text-uppercase">G735</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt</p>
              <p class="fw-black text-primary fs-3">$499</p>
              <button
                type="button"
                class="btn btn-dark w-100 "
              >Agregar al Carrito</button>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 my-4 row align-items-center">
            <div class="col-4">
              <img class="img-fluid" src="./public/img/audifono04.webp" alt="imagen audífono" />
            </div>
            <div class="col-8">
              <h3 class="text-black fs-4 fw-bold text-uppercase">g733</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt</p>
              <p class="fw-black text-primary fs-3">$399</p>
              <button
                type="button"
                class="btn btn-dark w-100 "
              >Agregar al Carrito</button>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 my-4 row align-items-center">
            <div class="col-4">
              <img class="img-fluid" src="./public/img/audifono05.webp" alt="imagen audífono" />
            </div>
            <div class="col-8">
              <h3 class="text-black fs-4 fw-bold text-uppercase">Astro A40</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt</p>
              <p class="fw-black text-primary fs-3">$259</p>
              <button
                type="button"
                class="btn btn-dark w-100 "
              >Agregar al Carrito</button>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 my-4 row align-items-center">
            <div class="col-4">
              <img class="img-fluid" src="./public/img/audifono06.webp" alt="imagen audífono" />
            </div>
            <div class="col-8">
              <h3 class="text-black fs-4 fw-bold text-uppercase">Astro A20</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt</p>
              <p class="fw-black text-primary fs-3">$170</p>
              <button
                type="button"
                class="btn btn-dark w-100 "
              >Agregar al Carrito</button>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 my-4 row align-items-center">
            <div class="col-4">
              <img class="img-fluid" src="./public/img/audifono07.webp" alt="imagen audífono" />
            </div>
            <div class="col-8">
              <h3 class="text-black fs-4 fw-bold text-uppercase">Astro A10</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt</p>
              <p class="fw-black text-primary fs-3">$120</p>
              <button
                type="button"
                class="btn btn-dark w-100 "
              >Agregar al Carrito</button>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 my-4 row align-items-center">
            <div class="col-4">
              <img class="img-fluid" src="./public/img/audifono08.webp" alt="imagen audífono" />
            </div>
            <div class="col-8">
              <h3 class="text-black fs-4 fw-bold text-uppercase">Astro A10</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt</p>
              <p class="fw-black text-primary fs-3">$130</p>
              <button
                type="button"
                class="btn btn-dark w-100 "
              >Agregar al Carrito</button>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 my-4 row align-items-center">
            <div class="col-4">
              <img class="img-fluid" src="./public/img/audifono09.webp" alt="imagen audífono" />
            </div>
            <div class="col-8">
              <h3 class="text-black fs-4 fw-bold text-uppercase">G335</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt</p>
              <p class="fw-black text-primary fs-3">$100</p>
              <button
                type="button"
                class="btn btn-dark w-100 "
              >Agregar al Carrito</button>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 my-4 row align-items-center">
            <div class="col-4">
              <img class="img-fluid" src="./public/img/audifono10.webp" alt="imagen audífono" />
            </div>
            <div class="col-8">
              <h3 class="text-black fs-4 fw-bold text-uppercase">G635</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt</p>
              <p class="fw-black text-primary fs-3">$295</p>
              <button
                type="button"
                class="btn btn-dark w-100 "
              >Agregar al Carrito</button>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 my-4 row align-items-center">
            <div class="col-4">
              <img class="img-fluid" src="./public/img/audifono11.webp" alt="imagen audífono" />
            </div>
            <div class="col-8">
              <h3 class="text-black fs-4 fw-bold text-uppercase">G633</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt</p>
              <p class="fw-black text-primary fs-3">$399</p>
              <button
                type="button"
                class="btn btn-dark w-100 "
              >Agregar al Carrito</button>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 my-4 row align-items-center">
            <div class="col-4">
              <img class="img-fluid" src="./public/img/audifono12.webp" alt="imagen audífono" />
            </div>
            <div class="col-8">
              <h3 class="text-black fs-4 fw-bold text-uppercase">Astro A40 TR</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt</p>
              <p class="fw-black text-primary fs-3">$499</p>
              <button
                type="button"
                class="btn btn-dark w-100 "
              >Agregar al Carrito</button>
            </div>
          </div>
        </div>
      </main>


      <footer class="bg-dark mt-5 py-5">
        <div class="container-xl">
          <p class="text-white text-center fs-4 mt-4 m-md-0">Logitesshh - Todos los derechos Reservados</p>
        </div>
      </footer>
    </>
  )
}

export default App
