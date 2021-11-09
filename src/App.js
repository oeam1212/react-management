// import logo from './logo.svg';
import './App.css';
import Customer from './componenets/Customer';

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday': '920302',
  'gender': '남자',
  'job': '대학생',
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '홍길동',
  'birthday': '920302',
  'gender': '남자',
  'job': '대학생',
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '홍길동',
  'birthday': '920302',
  'gender': '여자',
  'job': '대학생',
}]

//JSX 문법을 따른다.
function App() {
  return (

    <div>
      {
      customers.map(c => {
        return(
          <Customer
          // map을 쓸때는 key 값을 지정해줘야된다.
          key= {c.id}
          id = {c.id}
          image = {c.image}
          name={c.name}
          birthday={c.birthday}
          gender={c.gender}
          job={c.job}    
          />
        );
        })
      }
    </div>
    // <div className="gray-background">
    //   <img src={logo} lat="logo" />
    //   <h2>Let's develop management system!</h2>
    // </div>
  );
}

export default App;
