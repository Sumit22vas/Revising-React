/* eslint-disable no-unused-vars */
import React from 'react'

// Passing Props
// Dummy Books Array
// const books = [
//   {
//     image : 'https://m.media-amazon.com/images/I/41r6F2LRf8L._SY445_SX342_.jpg',
//     author : 'Morgan Housel',
//     title : 'The Psychology Of Money',
//     id : 1
//   },
//   {
//     image : 'https://m.media-amazon.com/images/I/51-nXsSRfZL._SY445_SX342_.jpg',
//     author : 'James Clear',
//     title : 'Atomic Habits',
//     id : 2
//   },
//   {
//     image : 'https://m.media-amazon.com/images/I/51Hfv2MfNGL._SY445_SX342_.jpg',
//     author : 'Robert T. Kiyosaki',
//     title : 'Rich Dad Poor Dad',
//     id : 3
//   }
// ];

// // Main APP Component
// const App = () => {
//   return (
//     <React.Fragment>
//         {books.map((book)=>{
//             return <Book {...book} key={book.id}/>;
//         })}
//     </React.Fragment>
//   )
// }

// const Book = (props) => {

//   // eslint-disable-next-line react/prop-types
//   const {image,title,author} = props;
//   //console.log(props);
//   return <>
//           <Image image={image} title={title}/>
//           <Title title={title}/>
//           <Author author={author}/>
//         </>
// }

// const Image = (book) => <div><img src = {book.image} alt={book.title}/></div>
// const Title = (book) => <h2>{book.title}</h2>
// const Author = (book) => <h6>By : {book.author}</h6>

// Button Click Event Handleing Practice

const App = ()=>{
    // Click Event Handle, Always kep it inside the component
    const handleButtonClick = (e) => {
      alert('You clciked this button');
    }

    return <button onClick={handleButtonClick}>Click me</button>
}

export default App;