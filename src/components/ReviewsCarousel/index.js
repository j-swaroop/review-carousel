// Write your code here
import './index.css' 
import {Component} from 'react'


class ReviewsCarousel extends Component{
    state = {
        activeReview: 0
    }

    getReview = (reviewsList) => {
        const {activeReview} = this.state
        const {imgUrl, username, companyName, description} = reviewsList[activeReview]
        return(
            <div className="review-container">
                <img className="profile-img" alt={username} src={imgUrl}/>
                <p className="username"> {username} </p>
                <p className="company-name"> {companyName}</p>
                <p className="description"> {description}</p>
            </div>
        )
    }

    displayPreviousReview = () => {
        const {activeReview} = this.state
        if(activeReview > 0){
            this.setState(prevState => ({activeReview: prevState.activeReview - 1}))
        }
    }

    displayNextReview = () => {
        const {activeReview} = this.state
        const {reviewsList} = this.props
        if(activeReview < reviewsList.length - 1){
            this.setState(prevState => ({activeReview: prevState.activeReview + 1}))
        }
    }

    render(){
        const {reviewsList} = this.props
        const {activeReview} = this.state

        return(
            <div className="bg-container">
                <h1 className="heading"> Reviews</h1>
                <div className="reviews-carousel">
                    <button data-testid="leftArrow" type="button" className="button" onClick={this.displayPreviousReview}>
                        <img className="arrow" alt="left arrow" src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "/>
                    </button>
                    {this.getReview(reviewsList)}
                    <button data-testid="rightArrow" type="button" className="button"  onClick={this.displayNextReview} >
                        <img className="arrow" alt="right arrow" src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"/>
                    </button>
                </div>
            </div>
        )
    }
}

export default ReviewsCarousel