import toastr from 'toastr';

toastr.options = {
   "progressBar": true,
   "showDuration": "0",
    "timeOut": "2500",
    "showMethod": "show",
}
const showToastrInfo = () => toastr["warning"]("Укажите Ваше имя",)
const showToastrSuccess = (nameUser) =>toastr["success"](`Спасибо ${nameUser}. Приятной игры=)`)
export { showToastrInfo, showToastrSuccess }