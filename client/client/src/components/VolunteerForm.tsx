import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { VolunteerSchema } from './VolunteerSchema';
import type { UserVolunteerSchema } from './VolunteerSchema';



export default function VolunteerForm() {

    const {
        register,
        handleSubmit,
        formState: { isValid }
    } = useForm<UserVolunteerSchema>({
        resolver: zodResolver(VolunteerSchema)
    })

    const onSubmit: SubmitHandler<UserVolunteerSchema> = (data) => {
        console.log(data.name)
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
                <input id="name" type="text" {...register('name')}/>

                <label htmlFor="phone"
                >Phone:</label>
                <input id="phone" type="text" {...register("phone")}/>

                <label htmlFor="address"
                >Address:</label>
                <input id="address" type="text" {...register("address")}/>

                <label htmlFor="email"
                >Email:</label>
                <input id="email" type="email" {...register("email")}/>

                <label htmlFor="community" 
                >Community:
                </label>
                <input id="community" type="text" {...register("community")}/>


                <label htmlFor="image" 
                >Image:
                </label>
                <input id="image" type="text" {...register("image")}/>

                <label htmlFor="description"
                >Description:
                </label>
                <input id="description" type="text" {...register("description")}/>


                <label htmlFor="restrictions"
                >Restrictions:
                </label>
                <input id="restrictions" {...register("restrictions")}/>

                <label htmlFor="authorized"
                >Authorized:
                </label>
                <input id="authorized" type="text" {...register("authorized")}/>

                <button type="submit">
                    Submit
                </button>

            </form>
        </>
    )
}

export interface VolunteerForm {
    isAcceptable(s: string): boolean;
  }