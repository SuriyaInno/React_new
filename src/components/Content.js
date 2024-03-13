import React, { useState } from "react";
import './Content.css';

import Select from 'react-select';


function Content() {




   
   
    const [name, setname] = useState();
    const [finalresponse, setfinalresponse] = useState();
    const [change, setchange] = useState();
    const [paragraphs, setParagraphs] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [selectedOptionss, setSelectedOptionss] = useState([

        { value: 'first_name', label: 'First Name' },
        { value: 'last_name', label: 'Last Name' },
        { value: 'gender', label: 'Gender' },
        { value: 'age', label: 'Age' },
        { value: 'account_name', label: 'Account Name' },
        { value: 'city', label: 'City' },
        { value: 'state', label: 'State' }
    ]);

    const removeDropdown = (indexToRemove) => {
        const updatedDropdowns = paragraphs.filter((item, index) => index !== indexToRemove);
        setParagraphs(updatedDropdowns);





        const updated = [...selectedOptionss, selectedOptions[indexToRemove]];
        // Update the state with the new array
        setSelectedOptionss(updated);

        // const updateds = [...selectedOptions, selectedOptions[indexToRemove]];
        // setSelectedOptions(updateds)
        const updatedValues = selectedOptions.filter(value => value !== selectedOptions[indexToRemove]);
        setSelectedOptions(updatedValues);



    };



    const handleInputChange = (e) => {


        if(e){
        setname(e.target.value);
      
        }
      };
    
    const handleChange = selectedOption => {
        setSelectedOption(selectedOption);
    };
    const handleChanges = (e,index) => {
        // setSelectedOption(selectedOptions);


//  const lastvalue = selectedOptions;

//         const finalvalue = e

    // const concat = [...selectedOptionss, lastvalue]

//     selectedOptionss.filter((obj, index, self) =>
//     index === self.findIndex(o => o.id === obj.id)
//   );


// const concate = [...selectedOptionss.concat(lastvalue)];

// setSelectedOptionss(concate);

// const updatedItems = selectedOptionss.filter(selectedOptionss => selectedOptionss !== finalvalue);



// setSelectedOptionss(updatedItems);
// setSelectedOptions(finalvalue)      
    };



    function handleClick() {








        if (selectedOption) {

            setSelectedOptionss(selectedOptionss.filter(selectedOptionss => selectedOptionss !== selectedOption));




            selectedOptionss.map((selectedOptionss) => {

                const op = selectedOptionss.label;

                if (op != selectedOption.label) {




                }
                else {



                    const updatedObjects = [...selectedOptions, selectedOptionss];
                    // Update the state with the new array
                    setSelectedOptions(updatedObjects);


                }

            })


         


            const newParagraphs = [...paragraphs, paragraphs.length + 1];
            setParagraphs(newParagraphs);


            setSelectedOption("");




        }





    }




    function final() {
            

setchange( selectedOptions.map(item =>  `${item.value}:${item.label}`));
//  console.log(change)

// selectedOptions.map(selectedOptions =>{

//     setchange[selectedOptions.label,selectedOptions.value]
//     console.log(change)
// })



        fetch("https://jsonplaceholder.typicode.com/posts",
            {
                method: "post",
                body: JSON.stringify({
                    "schema_name": name,
                    "schema": change
                }),
                headers: {
                    "content-type": "application/json"
                }
            }

        ).then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setfinalresponse(data);
          });


    }
    return (<>


        <label htmlFor="namebox" >
            Enter the Name of the Segment
            {name}</label>


        <input id="namebox" placeholder="Name of the segment" className="nameinput" list="id" onChange={handleInputChange}></input>

        <p className="paratag">
            To save your segment,you need to add the schemas to build the query
        </p>


        {paragraphs.map((paragraph, index) => (

            <div className="maindiv" key={index}>   <Select className="selectinput"
                value={selectedOptions[index]}
                onChange={handleChanges}
                options={selectedOptionss}
                
            />
                <button onClick={() => removeDropdown(index)}>-</button>
            </div>
        ))}



        <Select
            value={selectedOption}
            onChange={handleChange}
            options={selectedOptionss}
            placeholder="Add scheme to segement"
        />




        <p className="addnew" onClick={handleClick}>+Add new schema</p>





        <div className="savebutton">


            <button onClick={final}>
                Save segement
            </button>

        </div>

    </>

    )

























}




















export default Content;