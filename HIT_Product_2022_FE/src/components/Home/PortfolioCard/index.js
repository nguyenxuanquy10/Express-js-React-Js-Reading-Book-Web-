import React from 'react';
import './portfoliocard.scss';
import VisibilityIcon from '@mui/icons-material/Visibility';

function PortfolioCard(props) {
    function formatView(num) {
        num = Number.parseInt(num).toLocaleString('it-IT', {
            style: 'currency',
            currency: 'VND',
        });

        return num.split('VND')[0];
    }
    return (
        <div className={props.type === 'post' ? 'portfoliocard portfoliocard-post' : 'portfoliocard'}>
            <img src={props.image} alt="oprtfolio-bg" />
            <div className="portfoliocard_overlay">
                <div className="portfoliocard_overlay-title">{props.title}</div>
                <div className="portfoliocard_overlay-views" style={{ display: 'flex' }}>
                    {/* <span className="portfoliocard_overlay-views-icon"> */}
                    <VisibilityIcon sx={{ lineHeight: 0 }} />
                    {/* </span>{' '} */}
                    {formatView(props.view)}Views
                </div>
            </div>
        </div>
    );
}

export default PortfolioCard;
