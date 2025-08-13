$("#form-registration").on("submit",function(e)
{
    e.preventDefault();
    
    const selectedSkills = [] ;
    document.querySelectorAll('input[name="skill"]:checked').forEach(checkbox=>
    {
        selectedSkills.push(checkbox.value);
        console.log(checkbox.value);
    }
    )

    let gender;
    document.querySelectorAll('input[name="gender"]:checked').forEach(radio=>
    {
        console.log(radio.value);
        gender = radio.value;
    }
    )

    console.log(gender);

    let countryselect = document.getElementById("country");
    console.log(countryselect.value);

    const file = document.getElementById("file");

    const file_input = file.files[0];
    console.log(file_input.type);
    console.log(file_input.size);
    console.log(file_input.name);

    let name;
    name = prompt("Enter your name");
    console.log(name);
})