const PopupItem = ({ togglePopup }) => {
    return (
        <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50'>
            <div className='bg-white p-5 rounded-xl'>
                <p>Popup Content</p>
                <button className='mt-3 text-white bg-[#2c3038] rounded-xl p-2' onClick={togglePopup}>
                    Close
                </button>
            </div>
        </div>
    )
}

export default PopupItem
