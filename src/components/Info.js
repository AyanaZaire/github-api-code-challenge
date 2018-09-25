import React from 'react'
import { Header, Icon, Image } from 'semantic-ui-react'

const Info = ({user}) => {
    return(
      <React.Fragment>
        <Header as='h4'>User Info:</Header>

        {/* //NOTE: CSS class name 'user_info_container' is coming from App.css which is allowing us to set the user info align right to the user avatar */}
        <div className='user_info_container'>
          <div><Image src={user.avatar_url} size='small' circular /></div>

          <div>
            {/* //NOTE: Conditionally render based on data fetched from API */}
            {user.name === null ? (
              <div><Icon name='user' />Name: Info not available</div>
            ) : (
              <div><Icon name='user' />Name: {user.name}</div>
            ) }

            {user.bio === null ? (
              <div><Icon name='info circle' />Bio: Info not available</div>
            ) : (
              <div><Icon name='info circle' />Bio: {user.bio}</div>
            ) }

            {user.email === null ? (
              <div><Icon name='mail' />Email: Info not available</div>
            ) : (
              <div><Icon name='mail' />Email: <a href={`mailto:${user.email}`}>{user.email}</a></div>
            ) }

            {user.company === null ? (
              <div><Icon name='briefcase' />Company: Info not available</div>
            ) : (
              <div><Icon name='briefcase' />Company: {user.company}</div>
            ) }

            {user.public_repos === null ? (
              <div><Icon name='code' />Number of Public Repos: Info not available</div>
            ) : (
              <div><Icon name='code' />Number of Public Repos: {user.public_repos}</div>
            ) }

            {user.html_url === null ? (
              <div><Icon name='github' />Github Profile: Info not available</div>
            ) : (
              <div><Icon name='github' />Github Profile: <a href={`${user.html_url}`}>{user.html_url}</a></div>
            ) }
          </div>
        </div>
      </React.Fragment>
    )
  }

export default Info
