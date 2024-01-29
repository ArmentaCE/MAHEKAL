import { useForm } from "react-hook-form";
function TicketsFormPage() {

    const {register, handleSubmit} = useForm()

    const onSubmit = handleSubmit((data) => {
        console.log(data);   
    })

  return (
    <>
        <form onSubmit={onSubmit} >
            <input type="text"
                {...register('name')}
                placeholder="name"
                autoFocus
            />
            <input type="text" 
                {...register('user')}
                placeholder="user"
            />

            <button>
                register
            </button>

        </form>
    </>
    )
}

export default TicketsFormPage