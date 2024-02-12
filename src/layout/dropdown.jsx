import { useEffect } from "react";
import { useState , useRef } from "react";


const Icon = () => {
    return (
      <svg  height="20" width="20" viewBox="0 0 20 20">
        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" fill="#7E808A"></path>
      </svg>
    );
  };
  
  const CloseIcon = () => {
    return (
      <svg height="20" width="20" viewBox="0 0 20 20">
        <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z" fill="#7E808A"></path>
      </svg>
    );
  }; 

  const Globe = ( )=> {
     return <div className="pr-5">
      
     <svg  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M10 1.875C8.39303 1.875 6.82214 2.35152 5.486 3.24431C4.14985 4.1371 3.10844 5.40605 2.49348 6.8907C1.87852 8.37535 1.71762 10.009 2.03112 11.5851C2.34463 13.1612 3.11846 14.6089 4.25476 15.7452C5.39106 16.8815 6.8388 17.6554 8.4149 17.9689C9.99099 18.2824 11.6247 18.1215 13.1093 17.5065C14.594 16.8916 15.8629 15.8502 16.7557 14.514C17.6485 13.1779 18.125 11.607 18.125 10C18.1227 7.84581 17.266 5.78051 15.7427 4.25727C14.2195 2.73403 12.1542 1.87727 10 1.875ZM16.875 10C16.8757 10.882 16.7059 11.7558 16.375 12.5734L12.8828 10.4258C12.7343 10.3342 12.5682 10.2748 12.3953 10.2516L10.6125 10.0109C10.3668 9.9789 10.1172 10.0201 9.89483 10.1293C9.67247 10.2386 9.48729 10.411 9.3625 10.625H8.68125L8.38438 10.0109C8.30231 9.83995 8.18219 9.69002 8.03324 9.57261C7.88428 9.45521 7.71043 9.37345 7.525 9.33359L6.9 9.19844L7.51094 8.125H8.81641C9.02766 8.12459 9.23538 8.07084 9.42032 7.96875L10.3773 7.44062C10.4614 7.39376 10.54 7.33768 10.6117 7.27344L12.7141 5.37188C12.9248 5.18298 13.0649 4.92788 13.1112 4.64865C13.1575 4.36942 13.1073 4.08276 12.9688 3.83594L12.9406 3.78516C14.117 4.34297 15.1111 5.22296 15.8075 6.32301C16.5039 7.42306 16.8741 8.69805 16.875 10ZM3.125 10C3.12396 8.97814 3.35194 7.96904 3.79219 7.04688L4.67813 9.41172C4.75196 9.60752 4.87376 9.78165 5.03237 9.91815C5.19098 10.0546 5.38132 10.1491 5.58594 10.193L7.26016 10.5531L7.55782 11.1719C7.66112 11.3823 7.82121 11.5597 8.02001 11.6839C8.2188 11.8082 8.44839 11.8744 8.68282 11.875H8.79844L8.2336 13.143C8.13407 13.3662 8.1022 13.6138 8.14191 13.855C8.18162 14.0962 8.29118 14.3204 8.45704 14.5L8.46797 14.5109L10 16.0891L9.84844 16.8703C8.05299 16.8285 6.34497 16.0867 5.08885 14.8031C3.83273 13.5196 3.12798 11.7959 3.125 10Z" fill="#7E808A"/>
     </svg>
     </div> 
     
  }
  
const DropDown = (
{
  isMulti,
  isCountryCode,
  option,
  placeholder
}
  
) => {
  
  const [showMenu, setShowMenu] = useState(false)
  const [selectedValue, setSelectedValue] = useState(isMulti ? [] : null)
  const inputRef = useRef()
  
 
  useEffect(() => {
    const handler = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    }

    window.addEventListener("click",handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  })
  const removeOption = (option) => {
    return selectedValue.filter((o) => o !== option);
  }
  const onTagRemove = ( option) => {
    
    const newValue = removeOption(option);
    setSelectedValue(newValue);
   
  }
    const getDisplay = () => {
      if (!selectedValue || selectedValue.length === 0) {
       
        return <div className="text-[#7E808A] text-lg">{placeholder} <span className="text-[red]">*</span></div>
      }
      
      if (isMulti) {
        return (
          <div className="flex flex-wrap gap-2">
            {selectedValue.map((option,ind) => (
              <div key={ind} className="flex items-center px-2 py-0.5 border-2 rounded-lg bg-slate-200">
                {option}
                <span
                  onClick={() => onTagRemove( option)}
                  className="flex items-center"
                >
                  <CloseIcon />
                </span>
              </div>
            ))}
          </div>
        );
      }
      return selectedValue
      
      }


      const onItemClick = (option) => {
        let newValue;
        if (isMulti) {
          if (selectedValue.findIndex((o) => o === option) >= 0) {
            newValue = removeOption(option);
          } else {
            newValue = [...selectedValue, option];
          }
        } else {
          newValue = option;
        }
        setSelectedValue(newValue)
        
      }
      const isSelected = (option) => {
        if (isMulti) {
          return selectedValue.filter((o) => o === option).length > 0
        }
    
        if (!selectedValue) {
          return false
        }
    
        return selectedValue === option
      };
  return (
    <div tabIndex='1' className="relative border-2 rounded-xl focus:ring-2 focus:ring-inset focus:ring-gray-300 ">
     
      
      <div ref={inputRef} onClick={()=>{
setShowMenu(!showMenu)
      }} className="flex items-center justify-between p-3">
        <div className="flex items-center "> {isCountryCode && <Globe />} {getDisplay()}</div>
        <div className="flex items-center ">
        {selectedValue && selectedValue.length>0 && (<span onClick={()=>{setSelectedValue(isMulti ? [] : null)}}><CloseIcon/></span>)}
          <div className="">
            <Icon />
          </div>
        </div>
      </div>
      { showMenu && (
        
        
        <div className="absolute z-10 w-full overflow-auto translate-y-1 bg-white border-2 rounded-xl">
          {option.map((value , ind)=>{
            return <div key={ind} onClick={()=>{onItemClick(value)}} className={`p-2 cursor-pointer hover:bg-slate-200 ${isSelected(value) && "bg-slate-200"}`}>{value}</div>
          })}
        
        
        
      </div>
          )
      }
    </div>
  )
}

export default DropDown