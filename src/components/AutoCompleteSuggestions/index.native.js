import {Portal} from '@gorhom/portal';
import React from 'react';
import {propTypes} from './autoCompleteSuggestionsPropTypes';
import BaseAutoCompleteSuggestions from './BaseAutoCompleteSuggestions';
import useWindowDimensions from '@hooks/useWindowDimensions';
import { PressableWithoutFeedback } from '@components/Pressable';
import useThemeStyles from '@styles/useThemeStyles';

function AutoCompleteSuggestions({measureParentContainer, onClose, ...props}) {
    const {windowHeight} = useWindowDimensions();
    const styles = useThemeStyles();
    return (
        <Portal hostName="suggestions">
            {props.suggestions?.length > 0 && (
                <PressableWithoutFeedback
                    style={[styles.autoCompleteOutsideContainer, {top: -windowHeight, height: windowHeight}]}
                    onPress={onClose}
                />
            )}
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <BaseAutoCompleteSuggestions {...props} />
        </Portal>
    );
}

AutoCompleteSuggestions.propTypes = propTypes;
AutoCompleteSuggestions.displayName = 'AutoCompleteSuggestions';

export default AutoCompleteSuggestions;
