import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { volunteerSchema } from '../page/volunteerSchema';



export default function volunteerForm() {

    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm<typeof volunteerSchema>({
        resolver: zodResolver(volunteerSchema)
    })

    const onSubmit: SubmitHandler<typeof volunteerSchema> = (data) => {
        console.log(data)
    }

    console.log(isValid)

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
            >

                <label htmlFor="name"
                >Name:</label>
                <input id="name" type="text" {...register('_input.name')}/>

                <label htmlFor="phone"
                >Phone:</label>
                <input id="phone" type="text" {...register("_input.phone")}/>

                <label htmlFor="address"
                >Address:</label>
                <input id="address" type="text" {...register("_input.address")}/>

                <label htmlFor="email"
                >Email:</label>
                <input id="street" type="email" {...register("_input.email")}/>

                <label htmlFor="community" 
                >Community:
                </label>
                <input id="community" type="text" {...register("_input.community")}/>


                <label htmlFor="image" 
                >Image:
                </label>
                <input id="image" type="text" {...register("_input.image")}/>

                <label htmlFor="description"
                >Description:
                </label>
                <input id="description" type="text" {...register("_input.description")}/>


                <label htmlFor="restrictions"
                >Restrictions:
                </label>
                <input type="restrictions" {...register("_input.restrictions")}/>

                <label htmlFor="authorized"
                >Authorized:
                </label>
                <input id="authorized" type="boolean" {...register("_input.authorized")}/>

                <button type="submit">
                    Submit
                </button>

            </form>
        </>
    )
}
