import React from 'react'
import '../css/Dashboard.css'
import AddFood from '../components/AddFood'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div id="dashboard">
        <section>
          <div className="block">setting</div>
          <div className="block">ranking</div>
          <div className="block">hi</div>
        </section>
        <section>
          <div className="block-1">
            <AddFood />
          </div>
          <div className="block-1">Create Recipes</div>
        </section>
        <section>
          <div className="block-1">Give me Restaurants</div>
          <div className="block-1">hey</div>
        </section>
      </div>
    </div>
  )
}

export default Dashboard
