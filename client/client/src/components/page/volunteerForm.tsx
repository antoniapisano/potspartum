import { useForm } from 'react-hook-form';
import { z } from 'zod';

type VolunteerFormInputs = {
    name: string;
    phone: string;
    address: string;
    email: string;
    community: string;
    image: string;
    description: string;
    restrictions: [];
    authorized: boolean;
}

const schema = z.object({
    name: z.string().name(),
    phone: z.number().phone(),
    address: z.string().address(),
    email: z.string().email(),
    community: z.string().community(),
    image: z.string().image(),
    description: z.string().description,
    restrictions: z.[].restrictions(),
    authorized: z.boolean().authorised,

});

export const VolunteerForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<VolunteerFormInputs> ({
        resolver: async (data) => {
            try {
                await schema.validate(data);
                return { values: data, errors: {} };
            } catch (e) {
                if (e instanceof z.ZodError) {
                    return { values: {}, errors: e.errors};
                }
            }
        }
    });

    const onSubmit = data: VolunteerFormInputs) => {
        console.log(data);
    }

const {name, phone, address, email, community, image, description, restrictions, authorised} = errors;

return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input type="name" {...register("name")} />
        {name ? <span>{name.message}</span> : ''}

        <label>Phone</label>
        <input type="phone" {...register("phone")} />
        {phone ? <span>{phone.message}</span> : ''}

        <label>Address</label>
        <input type="address" {...register("address")} />
        {address ? <span>{address.message}</span> : ''}

        <label>Email</label>
        <input type="email" {...register("email")} />
        {email ? <span>{email.message}</span> : ''}

        <label>Community</label>
        <input type="community" {...register("community")} />
        {community ? <span>{community.message}</span> : ''}

        <label>Image</label>
        <input type="image" {...register("image")} />
        {image? <span>{image.message}</span> : ''}

        <label>Description</label>
        <input type="description" {...register("description")} />
        {description? <span>{description.message}</span> : ''}

        <label>Restrictions</label>
        <input type="restrictions" {...register("restrictions")} />
        {restrictions? <span>{restrictions.message}</span> : ''}

        <label>Authorised</label>
        <input type="authorised" {...register("authorised")} />
        {authorised? <span>{authorised.message}</span> : ''}

        <Button type="submit">Submit</Button>

    </form>

}