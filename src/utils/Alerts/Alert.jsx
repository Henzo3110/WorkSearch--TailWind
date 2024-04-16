import Slw from "sweetalert2"

export async function Alert(tipo, mensagem) {
  if (tipo == "Erro") {
    return await Slw.fire({
      title: "Erro",
      text: `${mensagem}`,
      icon: "error",
      iconColor: "#ff0000",
      confirmButtonColor: "var(--azul)",
      confirmButtonText: "Confirmar",
    })
  } else if (tipo == "Sucesso") {
    return await Slw.fire({
      title: "Sucesso",
      text: `${mensagem}`,
      icon: "success",
      iconColor: "#008000",
      confirmButtonColor: "var(--azul)",
      confirmButtonText: "Confirmar",
    })
  } else if (tipo == "Alert") {
    return await Slw.fire({
      title: "Alerta",
      text: `${mensagem}`,
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      cancelButtonColor: "#ff735c",
      iconColor: "#ffae00",
      confirmButtonColor: "var(--azul)",
      confirmButtonText: "Confirmar",
    })
  }
}