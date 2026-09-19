import { MoveRight } from 'lucide-react';
const Btn2 = ({ title })=> {
    return (
        <> 
            <button className="flex gap-2 text-center bg-gray-300 px-5 py-2 text-black rounded-4xl cursor-pointer">
                {title}
                <MoveRight> </MoveRight>

            </button>
        </>
    )
}

export default Btn2; 