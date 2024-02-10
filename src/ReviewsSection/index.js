import {useEffect, useState} from 'react'

const ReviewsSection = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://admin.tomedes.com/api/v1/get-reviews?page=1',
        )
        setReviews(response.data)
      } catch (error) {
        console.error('Error fetching reviews:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <h2 className="heading">What your Coustamour Say</h2>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <p>{review.comment}</p>
            <p>{review.author}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ReviewsSection
