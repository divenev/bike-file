import {useForm} from '../hooks/useForm'
import { useNavigate } from 'react-router-dom';
import { addBikeService } from '../services/addBikeService'

export const AddBike = () => {
    const { values, changeHandler } = useForm({
        brand: '',
        model: '',
        frame_number: '',
        type_bike: '',
        tire_size: '',
        frame_size: '',
        img: '',
        description: '',
        status: ''
        
    })
    const navigate = useNavigate()

    const onSubmit = async (e) => {
        await addBikeService(e)
        // my bike
        navigate('/bike/my')
    }



    return (
        <>
            <form className="form" id="create" onSubmit={onSubmit}>
                <input type="text" name="brand" value={values.brand} onChange={changeHandler} placeholder="Brand"></input>
                <input type="text" name="model" value={values.model} onChange={changeHandler} placeholder="Model"></input>
                <input type="text" name="type_bike" value={values.type_bike} onChange={changeHandler} placeholder="Type bike"></input>
                <input type="text" name="frame_number" value={values.frame_number} onChange={changeHandler} placeholder="Frame Number"></input>
                <input type="number" min={1} max={100} step={0.5} name="tire_size" value={values.tire_size} onChange={changeHandler} placeholder="Tire size"></input>
                <input type="text" name="frame_size" value={values.frame_size} onChange={changeHandler} placeholder="Frame size"></input>
                <input type="url" name="img" value={values.img} onChange={changeHandler} placeholder="Url image"></input>
                <input type="text" name="description" value={values.description} onChange={changeHandler} placeholder="Description"></input>
                <select name="status">
                    <option value="for_sale">For sale</option>
                    <option value="not_for_sale">Not for sale</option>
                    <option value="stolen">Stolen</option>
                </select>
                <input type="submit" className="button" value="Add bike"></input>
            </form>
        </>
    )
}