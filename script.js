// let testname = "Nguyen Van Dang";

// let res = testname.split(' ');
// console.log(res[res.length - 1]);


// basic data
let listStudent = [
    {
        fullName: 'Nguyễn Văn Dai',
        fixedClass: 'IT22B',
        mark: 10
    },
    {
        fullName: 'Lê Văn Bau',
        fixedClass: 'IT22B',
        mark: 9
    },
    {
        fullName: 'Võ Văn Chi',
        fixedClass: 'IT22B',
        mark: 7
    },
    {
        fullName: 'Trần Văn Giap',
        fixedClass: 'IT22B',
        mark: 2
    },
    {
        fullName: 'Nguyễn Văn Phong',
        fixedClass: 'IT22B',
        mark: 8
    },
    {
        fullName: 'Nguyễn Thị Anh',
        fixedClass: 'IT22B',
        mark: 6
    },
    {
        fullName: 'Đinh Văn Mo',
        fixedClass: 'IT22B',
        mark: 6
    },
    {
        fullName: 'Trần Đình Tien',
        fixedClass: 'IT22B',
        mark: 6
    },
    {
        fullName: 'Nguyễn Văn Ka',
        fixedClass: 'IT22B',
        mark: 6
    }
]

document.addEventListener('DOMContentLoaded', function () {
    builderTable(listStudent);
})

function getFirstName(name) {
    let res = name.split(' ');
    return res[res.length - 1];
}

let table_render = document.getElementById('content-result'); // get to builder
function builderTable(array_students) {
    let html = '';
    array_students.forEach(function (student) {
        html += `
        <tr>
            <td>${student.fullName}</td>
            <td>${student.fixedClass}</td>
            <td>${student.mark}</td>
        </tr>
        `
    })
    table_render.innerHTML = html;
}

let searchBtn = document.getElementById('search-button');
searchBtn.onclick = function (event) {
    event.preventDefault();
    let search = document.getElementById('search-field').value;
    let filter_student = listStudent.filter(function (student) {
        return student.fullName.toLowerCase().includes(search.toLowerCase())
            || student.fixedClass.toLowerCase().includes(search.toLowerCase())
            || student.mark.toString().toLowerCase().includes(search.toLowerCase());
    })
    builderTable(filter_student);
}

// sort a-z theo ten
let sortBtn = document.getElementById('sort-button');
let isAscending = true; // sort by two click
let counter_mark = true; // sort by two click
sortBtn.onclick = function (event) {
    event.preventDefault();
    let sort_student = listStudent.sort(function (a, b) {
        let nameA = getFirstName(a.fullName).charAt(0).toUpperCase();
        let nameB = getFirstName(b.fullName).charAt(0).toUpperCase();
        return isAscending ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    });
    isAscending = !isAscending;
    builderTable(sort_student);
}

let sortMark = document.getElementById('sort-mark');
sortMark.onclick = function (event) {
    event.preventDefault();
    let sort_student = listStudent.sort(function (a, b) {
        return counter_mark ? a.mark < b.mark : a.mark > b.mark;
    })
    counter_mark = !counter_mark;
    builderTable(sort_student);
}

let addStudent = document.getElementById('add-student');

addStudent.onclick = function (event) {
    event.preventDefault();
    let fullName_html = document.getElementById('fullName').value;
    let mark_html = document.getElementById('mark');
    let clas_html = document.getElementById('class').value;
    let test = parseInt(mark_html.value);

    listStudent.push({
        fullName: fullName_html,
        fixedClass: clas_html,
        mark: test
    })

    builderTable(listStudent);
}

