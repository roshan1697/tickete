import DropDown from "../layout/dropdown"
import Payment from "./payment"

const MainSection = () => {
  const Options = ['option1', 'option2', 'option3', 'option4', 'option5', 'option6']
  const codes = ['+1', '+44', '+52', '+91', '+86', '880', '1-246', '375', '32']

  return (
    <div className="">
      <span className="text-[#1C2024] font-semibold text-5xl">Confirm & pay</span>

      <Payment />
      <div className="bg-[#FCFCFD] border-2 rounded-2xl px-8 py-4">
        <span className="flex items-center justify-between">
          <h1 className="text-[#1C2024] font-semibold     ">Free cancellation</h1>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1.5C6.71442 1.5 5.45772 1.88122 4.3888 2.59545C3.31988 3.30968 2.48676 4.32484 1.99479 5.51256C1.50282 6.70028 1.37409 8.00721 1.6249 9.26809C1.8757 10.529 2.49477 11.6872 3.40381 12.5962C4.31285 13.5052 5.47104 14.1243 6.73192 14.3751C7.99279 14.6259 9.29973 14.4972 10.4874 14.0052C11.6752 13.5132 12.6903 12.6801 13.4046 11.6112C14.1188 10.5423 14.5 9.28558 14.5 8C14.4982 6.27665 13.8128 4.62441 12.5942 3.40582C11.3756 2.18722 9.72335 1.50182 8 1.5ZM7.75 4.5C7.89834 4.5 8.04334 4.54399 8.16668 4.6264C8.29002 4.70881 8.38615 4.82594 8.44291 4.96299C8.49968 5.10003 8.51453 5.25083 8.48559 5.39632C8.45665 5.5418 8.38522 5.67544 8.28033 5.78033C8.17544 5.88522 8.04181 5.95665 7.89632 5.98559C7.75083 6.01453 7.60003 5.99968 7.46299 5.94291C7.32595 5.88614 7.20881 5.79001 7.1264 5.66668C7.04399 5.54334 7 5.39834 7 5.25C7 5.05109 7.07902 4.86032 7.21967 4.71967C7.36032 4.57902 7.55109 4.5 7.75 4.5ZM8.5 11.5C8.23479 11.5 7.98043 11.3946 7.7929 11.2071C7.60536 11.0196 7.5 10.7652 7.5 10.5V8C7.36739 8 7.24022 7.94732 7.14645 7.85355C7.05268 7.75979 7 7.63261 7 7.5C7 7.36739 7.05268 7.24021 7.14645 7.14645C7.24022 7.05268 7.36739 7 7.5 7C7.76522 7 8.01957 7.10536 8.20711 7.29289C8.39465 7.48043 8.5 7.73478 8.5 8V10.5C8.63261 10.5 8.75979 10.5527 8.85356 10.6464C8.94732 10.7402 9 10.8674 9 11C9 11.1326 8.94732 11.2598 8.85356 11.3536C8.75979 11.4473 8.63261 11.5 8.5 11.5Z" fill="#7E808A" />
          </svg>
        </span>
        <h1 className="text-[#60646C] mt-1">Tickets can be cancelled by 13th December, 2022.</h1>
      </div>
      <div>
        <h1 className="font-semibold text-[#1C2024] text-2xl">Enter your details</h1>
        <h1 className="text-[#60646C]">We'll be sending your tickets to the details below. Booking for a friend? Add their details.</h1>
        <div className='grid grid-cols-2 gap-4'>

          <div className="relative col-span-2 input-placeholder">
            <input className="w-full pl-5 border-2 h-14 custom-input focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300 rounded-xl" type="text" required />
            <div className="absolute top-0 ml-5 placeholder text-[#7E808A] text-lg mt-3">
              Full name <span className="text-[red]">*</span>
            </div>
          </div>

          <DropDown
            isCountryCode
            option={codes}
            placeholder='Country code'
          />
          <div className="relative input-placeholder">
            <input className="w-full pl-5 border-2 h-14 custom-input focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300 rounded-xl input-number" type="number" required />
            <div className="absolute top-0 ml-5 placeholder text-[#7E808A] text-lg mt-3">
              Phone number <span className="text-[red]">*</span>
            </div>
          </div>
          <div className="relative input-placeholder">
            <input className="w-full pl-5 border-2 h-14 custom-input focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300 rounded-xl" type="text" required />
            <div className="absolute top-0 ml-5 placeholder text-[#7E808A] text-lg mt-3">
              Email <span className="text-[red]">*</span>
            </div>
          </div>
          <div className="relative input-placeholder">
            <input className="w-full pl-5 border-2 h-14 custom-input focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300 rounded-xl" type="text" required />
            <div className="absolute top-0 ml-5 placeholder text-[#7E808A] text-lg mt-3">
              Confirm email <span className="text-[red]">*</span>
            </div>
          </div>
        </div>
        <div className="border-[#DDDDE3]  border-t-2 "></div>


        <div>

          <div>
            <h1 className="font-semibold text-[#1C2024] text-2xl">Additional information</h1>
            <h1 className="text-[#60646C]">We need a few more details to complete your reservation.</h1>

          </div>
          <div className="grid grid-cols-2 gap-4">

            <div className="relative input-placeholder">
              <input className="w-full border-2 h-14 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300 rounded-xl" type="text" required />
              <div className="absolute top-0 ml-5 placeholder text-[#7E808A] text-lg mt-3">
                Full name <span className="text-[red]">*</span>
              </div>
            </div>



            <DropDown
              option={Options}
              placeholder='Select'
            />
            <div className="col-span-2 ">

              <DropDown
                isMulti
                option={Options}
                placeholder='Multiselect'
              />
            </div>
          </div>
        </div>
        <div className="border-[#DDDDE3]  border-t-2 "></div>

        <div>
          <span>
            <h1 className="text-[#1C2024] text-2xl font-semibold">Select your mode of payment</h1>
            <h1 className="text-[#60646C]">Payments with Tickete are secure and encrypted.</h1>
          </span>
          
          <div>
            <div>
            <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 0.750244H2C1.66848 0.750244 1.35054 0.88194 1.11612 1.11636C0.881696 1.35078 0.75 1.66872 0.75 2.00024V12.0002C0.75 12.3318 0.881696 12.6497 1.11612 12.8841C1.35054 13.1185 1.66848 13.2502 2 13.2502H17C17.3315 13.2502 17.6495 13.1185 17.8839 12.8841C18.1183 12.6497 18.25 12.3318 18.25 12.0002V2.00024C18.25 1.66872 18.1183 1.35078 17.8839 1.11636C17.6495 0.88194 17.3315 0.750244 17 0.750244ZM17 2.00024V3.87524H2V2.00024H17ZM17 12.0002H2V5.12524H17V12.0002ZM15.75 10.1252C15.75 10.291 15.6842 10.45 15.5669 10.5672C15.4497 10.6844 15.2908 10.7502 15.125 10.7502H12.625C12.4592 10.7502 12.3003 10.6844 12.1831 10.5672C12.0658 10.45 12 10.291 12 10.1252C12 9.95948 12.0658 9.80051 12.1831 9.6833C12.3003 9.56609 12.4592 9.50024 12.625 9.50024H15.125C15.2908 9.50024 15.4497 9.56609 15.5669 9.6833C15.6842 9.80051 15.75 9.95948 15.75 10.1252ZM10.75 10.1252C10.75 10.291 10.6842 10.45 10.5669 10.5672C10.4497 10.6844 10.2908 10.7502 10.125 10.7502H8.875C8.70924 10.7502 8.55027 10.6844 8.43306 10.5672C8.31585 10.45 8.25 10.291 8.25 10.1252C8.25 9.95948 8.31585 9.80051 8.43306 9.6833C8.55027 9.56609 8.70924 9.50024 8.875 9.50024H10.125C10.2908 9.50024 10.4497 9.56609 10.5669 9.6833C10.6842 9.80051 10.75 9.95948 10.75 10.1252Z" fill="#60646C"/>
</svg>
            <span className="text-[#1C2024] font-semibold text-lg">Credit & debit card</span>              
            
            <div className="w-6 h-6 rounded-full b-order bg-slate-200"></div>
        

              
            </div>
            

            
          </div>

          
        </div>


        
      </div>
    </div>
  )
}

export default MainSection