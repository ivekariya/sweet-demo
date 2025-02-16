import React from "react";
import { Rate } from 'antd';
const Review = () => {
    return (
        <>
            <div className="review-contant">
                <div className="review-contant-inner">
                    <div className="block-left">
                        <h2 className="title">
                            Reviews
                        </h2>
                        <p>There are no reviews yet.</p>
                    </div>
                    <div className="block-right">
                        <div className="reply-title">
                            Be the first to review “White Cake”
                        </div>
                        <form method="post">
                            <div className="comment-note">
                                <span id="email-notes">Your email address will not be published.</span> <span class="required-field-message">Required fields are marked <span class="required">*</span></span>
                            </div>
                            <div className="rating">
                                <label>Your rating&nbsp;<span class="required">*</span> :</label>
                                <p className="stars">
                                    <Rate allowHalf defaultValue={2.5} />
                                </p>
                            </div>
                            <div className="comment">
                                <label>Your review&nbsp;<span class="required">*</span></label>
                                <textarea id="comment" name="comment" cols="45" rows="8" required=""></textarea>
                            </div>
                            <div className="author">
                                <label>Name&nbsp;<span class="required">*</span></label>
                                <input id="author" name="author" type="text" value="" size="30" required="" />
                            </div>
                            <div className="email">
                                <label for="email">Email&nbsp;<span class="required">*</span></label><input id="email" name="email" type="email" value="" size="30" required="" />
                            </div>
                            <div className="consent">
                                <input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" value="yes" /> <label>Save my name, email, and website in this browser for the next time I comment.</label>
                            </div>
                            <div className="submit">
                                <input name="submit" type="submit" id="submit" class="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Review;