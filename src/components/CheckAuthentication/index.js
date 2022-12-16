import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'

const privatePath = [
    '/user/', '/admin/',
]

function CheckAuthentication() {
    const user = useSelector(state => state.auth.user)
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    useEffect(() => {
        const check = () => {
            const isPrivate = privatePath.findIndex(e => location.pathname.includes(e)) >= 0 ? true : false
        }
        check()
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])
    return
}

export default CheckAuthentication