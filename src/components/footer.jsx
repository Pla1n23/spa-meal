function Footer() {
    return <footer className="page-footer blue darken-1">
        <div className="footer-copyright ">
            <div className="container">
                © {new Date().getFullYear()} Kayumov E. ; Faterin M. ; Kulesha K. 
                <a className="grey-text text-lighten-4 right" href="#!">Repository</a>
            </div>
        </div>
    </footer>
}
export { Footer };