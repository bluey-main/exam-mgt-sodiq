import "./App.css";


const Timetable = () => {
  return (
    <div className='w-full h-screen px-7 my-16'>
        <table className='border border-black w-full'>
            <tr className="text-center" >
                <td colSpan={12}>
                <h1 className="text-2xl font-bold">YABA COLLEGE OF TECHNOLOGY</h1>
                <h1  className="text-2xl font-bold">SCHOOL OF TECHNOLOGY</h1>
                </td>
                
            </tr>
            <tr className="text-center">
                <td colSpan={12}>
                <h1  className="text-xl font-bold">EXAMINATION TIMETABLE</h1>

                </td>
            </tr>
            <tr>
                <td rowSpan={6}> Day</td>
                <td rowSpan={6}> Classes</td>
            </tr>
            <tr className="font-bold">
                <td>Day1</td>
                <td>Day2</td>
                <td>Day3</td>
                <td>Day4</td>
                <td>Day5</td>
                <td>Day6</td>
                <td>Day7</td>
                <td>Day8</td>
                <td>Day9</td>
                <td>Day10</td>
            </tr>
            <tr className="font-semibold">
                <td>Monday</td>
                <td>Tuesday</td>
                <td>Wednesday</td>
                <td>Thursday</td>
                <td>Friday</td>
                <td>Monday</td>
                <td>Tuesday</td>
                <td>Wednesday</td>
                <td>Thursday</td>
                <td>Friday</td>
               
            </tr>
            <tr className="font-semibold">
                <td>25-02-2024</td>
                <td>25-02-2024</td>
                <td>25-02-2024</td>
                <td>25-02-2024</td>
                <td>25-02-2024</td>
                <td>25-02-2024</td>
                <td>25-02-2024</td>
                <td>25-02-2024</td>
                <td>25-02-2024</td>
                <td>25-02-2024</td>
            </tr>
            <tr className="font-semibold">
                <td>M</td>
                <td>M</td>
                <td>M</td>
                <td></td>
                <td>M</td>
                <td>M</td>
                <td>M</td>
                <td>M</td>
                <td>M</td>
                <td>M</td>
            </tr>
            <tr className="font-semibold">
                <td>9am-12pm</td>
                <td>9am-12pm</td>
                <td>9am-12pm</td>
                <td className="bg-black text-white">9am (CBT PAPERS)</td>
                <td>9am-12pm</td>
                <td>9am-12pm</td>
                <td>9am-12pm</td>
                <td>9am-12pm</td>
                <td>9am-12pm</td>
                <td>9am-12pm</td>
            </tr>

            {/* COMPUTER TECH */}
            <tr>
                <td rowSpan={5}>Computer Technology</td>
            </tr>
            <tr>
                <td>HND2</td>
                <td></td>
                <td></td>
                <td></td>
                <td className="bg-black text-white"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

            </tr>
            <tr>
                <td>HND1</td>
                <td></td>
                <td></td>
                <td></td>
                <td className="bg-black text-white"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

            </tr>
            <tr>
                <td>ND2</td>
                <td></td>
                <td></td>
                <td></td>
                <td className="bg-black text-white"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

            </tr>
            <tr>
                <td>ND1</td>
                <td></td>
                <td></td>
                <td></td>
                <td className="bg-black text-white"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

            </tr>

            {/* FOOD TECH */}
            <tr>
                <td rowSpan={5}>FOOD Technology</td>
            </tr>
            <tr>
                <td>HND2</td>
                <td></td>
                <td></td>
                <td></td>
                <td className="bg-black text-white"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

            </tr>
            <tr>
                <td>HND1</td>
                <td></td>
                <td></td>
                <td></td>
                <td className="bg-black text-white"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

            </tr>
            <tr>
                <td>ND2</td>
                <td></td>
                <td></td>
                <td></td>
                <td className="bg-black text-white"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

            </tr>
            <tr>
                <td>ND1</td>
                <td></td>
                <td></td>
                <td></td>
                <td className="bg-black text-white"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

            </tr>

            {/*  NUTRITION AND DIETETICS */}
            <tr>
                <td rowSpan={5}>NUTRITION AND DIETETICS</td>
            </tr>
            <tr>
                <td>HND2</td>
                <td></td>
                <td></td>
                <td></td>
                <td className="bg-black text-white"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

            </tr>
            <tr>
                <td>HND1</td>
                <td></td>
                <td></td>
                <td></td>
                <td className="bg-black text-white"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

            </tr>
            <tr>
                <td>ND2</td>
                <td></td>
                <td></td>
                <td></td>
                <td className="bg-black text-white"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

            </tr>
            <tr>
                <td>ND1</td>
                <td></td>
                <td></td>
                <td></td>
                <td className="bg-black text-white"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

            </tr>

            {/*  HOSPITALITY MANAGEMENT */}
            <tr>
                <td rowSpan={5}>HOSPITALITY MANAGEMENT </td>
            </tr>
            <tr>
                <td>HND2</td>
                <td></td>
                <td></td>
                <td></td>
                <td className="bg-black text-white"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

            </tr>
            <tr>
                <td>HND1</td>
                <td></td>
                <td></td>
                <td></td>
                <td className="bg-black text-white"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

            </tr>
            <tr>
                <td>ND2</td>
                <td></td>
                <td></td>
                <td></td>
                <td className="bg-black text-white"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

            </tr>
            <tr>
                <td>ND1</td>
                <td></td>
                <td></td>
                <td></td>
                <td className="bg-black text-white"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

            </tr>

             {/*  TEXTILE TECHNOLOGY */}
             <tr>
                <td rowSpan={5}>TEXTILE TECHNOLOGY </td>
            </tr>
            <tr>
                <td>HND2</td>
                <td></td>
                <td></td>
                <td></td>
                <td className="bg-black text-white"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

            </tr>
            <tr>
                <td>HND1</td>
                <td></td>
                <td></td>
                <td></td>
                <td className="bg-black text-white"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

            </tr>
            <tr>
                <td>ND2</td>
                <td></td>
                <td></td>
                <td></td>
                <td className="bg-black text-white"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

            </tr>
            <tr>
                <td>ND1</td>
                <td></td>
                <td></td>
                <td></td>
                <td className="bg-black text-white"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

            </tr>
            {/*  POLYMER TECHNOLOGY */}
            <tr>
                <td rowSpan={5}>POLYMER TECHNOLOGY </td>
            </tr>
            
            <tr>
                <td>ND2</td>
                <td></td>
                <td></td>
                <td></td>
                <td className="bg-black text-white"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

            </tr>
            <tr>
                <td>ND1</td>
                <td></td>
                <td></td>
                <td></td>
                <td className="bg-black text-white"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

            </tr>
        </table>
    </div>
  )
}

export default Timetable