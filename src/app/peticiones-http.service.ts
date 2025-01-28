import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeticionesHttpService {

  constructor() { }

  async ObtenerListaApi(ruta: String){ 
    try {
        const response = await fetch(`http://localhost:8000/${ruta}`, {
          method: "GET",
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
        });

        if(!response.ok){
          throw new Error("Super Error");
        }

        const resultado = await response.json();

        return resultado;            

    } catch (error) {
        console.log(error);
    }
}

async CrearEntidad( ruta: String, data: Object){
    try {
       
        const respuesta = await fetch(`http://localhost:8000/${ruta}`, {
          method: "POST",
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
          body: JSON.stringify(data),
        });
  
        const resultado = await respuesta.json();

        return resultado;
  
      } catch (err) {
        console.log(err);
      }
}

async ObtenerDatosCompletos(ruta: String, id: String){
  try {
    const response = await fetch(`http://localhost:8000/${ruta}/${id}`, {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      credentials: "omit"
    });

    if(!response.ok){
      throw new Error("Super Error");
    }

    const resultado = await response.json();

    return resultado;
  } catch (er) {
    console.log(er)
  }
}

async EditarEntidad(ruta: String, id: String , data: Object){
  try {
    const response = await fetch(`http://localhost:8000/${ruta}/${id}`, {
      method: "PUT",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });

    if(!response.ok){
      throw new Error("Super Error");
    }

    const resultado = await response.json();

    return resultado;
  } catch (er) {
    console.log(er)
  }
}

}
