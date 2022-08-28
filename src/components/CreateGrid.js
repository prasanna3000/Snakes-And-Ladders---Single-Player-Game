import React from 'react';
import {
    findAvatarPosition,
    generateValuesForGrid,
} from '../utils/helperFunctions';

export default function CreateGrid(props) {
    // handlers - BEGIN    
    function CreateTenByTenGridCell (isRowSelected, column, avatar) {
        return <div className='gridColumn'>
            <div className='gridCell'>{isRowSelected && column === 1 ? <img className="greenHighlightToImage" height={45} width={45} alt="avatar" src={avatar}/> : null}</div>
            <div className='gridCell'>{isRowSelected && column === 2 ? <img className="greenHighlightToImage" height={45} width={45} alt="avatar" src={avatar}/> : null}</div>
            <div className='gridCell'>{isRowSelected && column === 3 ? <img className="greenHighlightToImage" height={45} width={45} alt="avatar" src={avatar}/> : null}</div>
            <div className='gridCell'>{isRowSelected && column === 4 ? <img className="greenHighlightToImage" height={45} width={45} alt="avatar" src={avatar}/> : null}</div>
            <div className='gridCell'>{isRowSelected && column === 5 ? <img className="greenHighlightToImage" height={45} width={45} alt="avatar" src={avatar}/> : null}</div>
            <div className='gridCell'>{isRowSelected && column === 6 ? <img className="greenHighlightToImage" height={45} width={45} alt="avatar" src={avatar}/> : null}</div>
            <div className='gridCell'>{isRowSelected && column === 7 ? <img className="greenHighlightToImage" height={45} width={45} alt="avatar" src={avatar}/> : null}</div>
            <div className='gridCell'>{isRowSelected && column === 8 ? <img className="greenHighlightToImage" height={45} width={45} alt="avatar" src={avatar}/> : null}</div>
            <div className='gridCell'>{isRowSelected && column === 9 ? <img className="greenHighlightToImage" height={45} width={45} alt="avatar" src={avatar}/> : null}</div>
            <div className='gridCell'>{isRowSelected && column === 10 ? <img className="greenHighlightToImage" height={45} width={45} alt="avatar" src={avatar}/> : null}</div>
        </div>
    }
    function CreateTenByTenGridRow(avatarRow, avatarColumn, avatar) {
        return <div className='gridRow'>
            {CreateTenByTenGridCell(avatarRow === 1 ? true : false, avatarColumn, avatar)}
            {CreateTenByTenGridCell(avatarRow === 2 ? true : false, avatarColumn, avatar)}
            {CreateTenByTenGridCell(avatarRow === 3 ? true : false, avatarColumn, avatar)}
            {CreateTenByTenGridCell(avatarRow === 4 ? true : false, avatarColumn, avatar)}
            {CreateTenByTenGridCell(avatarRow === 5 ? true : false, avatarColumn, avatar)}
            {CreateTenByTenGridCell(avatarRow === 6 ? true : false, avatarColumn, avatar)}
            {CreateTenByTenGridCell(avatarRow === 7 ? true : false, avatarColumn, avatar)}
            {CreateTenByTenGridCell(avatarRow === 8 ? true : false, avatarColumn, avatar)}
            {CreateTenByTenGridCell(avatarRow === 9 ? true : false, avatarColumn, avatar)}
            {CreateTenByTenGridCell(avatarRow === 10 ? true : false, avatarColumn, avatar)}
        </div>
    }
    function createTenByTenGridDiv(row, column, avatar) {
        return <div className="">
            {CreateTenByTenGridRow(row, column, avatar)}
        </div>
    }
    // handlers - END

    // core Component Logic
    const gridSize = props.gridSize;
    const position = props.position;
    const avatar = props.avatar;
    const gridValues = generateValuesForGrid(gridSize);
    const { row, column } = findAvatarPosition(gridValues, position);
    console.log(row, column);
    return <div>{createTenByTenGridDiv(row, column, avatar)}</div>
}