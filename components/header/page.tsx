const Header = () => {
    return (
        <header className="py-3">
            <div className="container mx-auto flex gap-2">
                <a href="/" title="آپارات" className="w-3/12">
                    <img src="assets/img/logo.png" alt="آپارات" className="logo" />
                </a>
                <form className="w-5/12">
                    <input type="text" placeholder="جستجو در فیلم ها" className="w-full"/>
                </form>
                <div className="w-4/12">
                    <a href="">آفزودن ویدئو جدید</a>
                </div>
            </div>
        </header>
    )
}

export  default Header