import React from 'react';

class Customer extends React.Component {
    render() {

        return(
            <div>
                <CustomerProfile 
                    img={this.props.image}
                    name={this.props.name}
                    id={this.props.id}
                />
                <CustomerInfo
                    birthday={this.props.birthday}
                    gender={this.props.gender}
                    job={this.props.job}
                />
            </div>



        )

    }
}

// 프로필
class CustomerProfile extends React.Component {
    render() {
        return (
            <div>
                <img srt={this.props.image} alt="profile"/>
                {/* 시각 장애인분들을 위해 profile이라는거 넣어준다. */}
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

// 사용자의 남은 데이터
class CustomerInfo extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}


export default Customer;
