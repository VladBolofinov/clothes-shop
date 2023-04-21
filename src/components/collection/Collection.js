import './Collection.scss';

const Collection = () => {
    return (
        <div className='collection-wrapper'>
            <div className="collection-girl1">
                <h1 className='collection-header'>New<br/>Arrival</h1>
                <p className='collection-descr'>
                    Style and comfort in every detail: discover the new collection of women's clothing from our online store.
                </p>
                <a className='collection-link' href="#">Смотреть коллекцию</a>
            </div>
            <div className='square'>
                <div className='collection-girl2'>
                    <p className='collection-descr'>
                        Embodiment of style: update your wardrobe with the new collection from our store.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Collection;