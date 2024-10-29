import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
jest.mock('@chakra-ui/react',()=>{ return  {
    Input:({type,name, px, size})=>{<input />},
    Button:({children})=>{<button>{children}</button>},
    Text:({props})=>{<div></div>},
    Field:{
        Root: ({props})=>(<div></div>)
    }
  }
}
)

test('Renders the BookingForm heading', () => {
    const allTimeSlots = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    render(<BookingForm timeSlots={allTimeSlots} />);
    const headingElement = screen.getByText("Fill follow informations");
    expect(headingElement).toBeInTheDocument();
})