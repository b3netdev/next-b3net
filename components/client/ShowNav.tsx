"use client"
import React, { useEffect } from 'react'
import { useAppDispatch } from '@/redux/hooks'
import { setStickyNavMenu } from '@/redux/slicers/menuSlicer'

const ShowNav = () => {
    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(setStickyNavMenu(true));

        return () => {
            dispatch(setStickyNavMenu(false));
        };
    }, [dispatch])
    return (
        <div />
    )
}

export default ShowNav