window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const HeaderHtml = "<tr><th>Full Name</th><th>Address</th><th>City</th><th>State</th>" +
    "<th>Zip Code</th><th>Phone Number</th><th>Options</th></tr>";
    const innerHtml = `${HeaderHtml}   
                <tr>
                    <td>S Jahnavi</td>
                    <td>41-20/1-52</td>
                    <td>Vja</td>
                    <td>Andhra Pradesh</td>
                    <td>520013</td>
                    <td>+91 8425612328</td>
                    <td>
                        <img id="1" onclick="remove(this)" alt="delete" src="../Assets/create-black-18dp.svg">
                        <img id="1" alt="edit" onclick="update(this)" src="../Assets/delete-black-18dp.svg">
                    </td>
                </tr>
                `;
    document.querySelector('#display').innerHTML = innerHtml;
}