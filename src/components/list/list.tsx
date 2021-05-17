import * as React from "react";

import "./list.scss";

import IconSearch from "../../svg/icon-search.svg";
import IconDelete from "../../svg/icon-delete.svg";
import IconDots from "../../svg/icon-dots.svg";

interface IList {
    data: IListItem[];
    inputPlaceholder: string;
    minItemsNumber?: number;
}

export interface IListItem {
    id: string;
    title: string;
    subTitle: string;
    emptyItem?: boolean;
}

const emptyArr = (minItemsNumber: number, arrLength: number): IListItem[]  => Array.from({length: minItemsNumber - arrLength}, (_, i) => ({
    id: `${minItemsNumber - arrLength + i + 1}`,
    title: "",
    subTitle: "",
    emptyItem: true
}));

const listItem = (data: IListItem, index: number) => {

    const {emptyItem, title, subTitle} = data;

    const className = `s-list-item ${emptyItem ? "s-list-item--empty" : ""}`;

    return (
        <li className={className} key={data.id}>
            <div className="s-item-number">{index + 1}</div>
            <div className="s-item-dots">
                {!emptyItem && <img src={IconDots} className="s-dots-icon" alt="dots-icon"/>}
            </div>
            <div className="s-item-content">
                <div className="s-item-title">
                    {title}
                </div>
                <div className="s-item-subtitle">
                    {subTitle}
                </div>
            </div>
            <div className="s-item-delete">
                {!emptyItem && <button type="button" className="s-button-delete">
                    <img src={IconDelete} alt="delete" className="s-icon-delete"/>
                </button>}
            </div>
        </li>
    )
}

export function List({
        data,
        inputPlaceholder,
        minItemsNumber = 6,
    }: IList) {

    const iterableArr: IListItem[] = minItemsNumber > data.length ? emptyArr(minItemsNumber, data.length) : [];

    const getItems = [...data, ...iterableArr].map(listItem);

    return (
        <div className="m-list">
            <div className="s-list-head">
                <div className="s-head-search">
                    <input
                        className="s-search-input-field"
                        placeholder={inputPlaceholder}
                    />
                    <img src={IconSearch} className="s-search-icon" alt="search-icon"/>
                </div>

                <div className="s-head-related-items">
                    Related:{' '}
                    <a href="#" className="s-related-item">GOLD</a>,{' '}
                    <a href="#" className="s-related-item">AEM</a>,{' '}
                    <a href="#" className="s-related-item">AUY</a>
                </div>
            </div>
            <ol className="s-list-body">
                {getItems}
            </ol>
        </div>
    );
}
