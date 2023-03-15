import React from "react";
import "../styles/styles.css";

function ProdSearch() {
    return (
        <div className="contact-me">
            <p>A List Of My Projects.</p>
            <form>
                <input
                    type="text"
                    placeholder="Search.."
                />
                {/* <input type="submit" name="submit" defaultValue="Lets Start" /> */}
            </form>
        </div>
    );
}

export default ProdSearch;