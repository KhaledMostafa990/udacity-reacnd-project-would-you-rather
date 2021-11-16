import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'

import Typography  from '@material-ui/core/Typography'
import Box  from '@material-ui/core/Box'
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 25,
    borderRadius: 4,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);

function QuestionVotes (props) {
        const {users , authedUser ,question } = props
        const {id} = question

    return (
        <>   
        <Typography variant='body1' component='p' >{props.optionText}</Typography>

            <Typography variant='h6' component='p'
                style={{position:'absolute', top:'1.1rem',right:'40%', zIndex:'1'}}>
                {`${ (props.optionVotes / 3 * 100).toFixed() }%`}
            </Typography>

            <Box >
                <BorderLinearProgress variant="determinate" 
                    value={ props.optionVotes / 3 * 100  || 0 } />
            </Box>

        <Typography variant='body1' component='p' >{`${props.optionVotes} out of 3 votes`}</Typography>
        </>
    )
}

function mapStateToProps ({questions, users, authedUser} , {id}) {

    const question = questions[id];
    return {
       question,
       users,
       authedUser,
    }
}
export default connect(mapStateToProps)(QuestionVotes)
