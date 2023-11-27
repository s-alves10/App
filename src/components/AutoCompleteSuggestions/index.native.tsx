import {Portal} from '@gorhom/portal';
import React from 'react';
import useWindowDimensions from '@hooks/useWindowDimensions';
import { PressableWithoutFeedback } from '@components/Pressable';
import useThemeStyles from '@styles/useThemeStyles';
import BaseAutoCompleteSuggestions from './BaseAutoCompleteSuggestions';
import type {AutoCompleteSuggestionsProps} from './types';

function AutoCompleteSuggestions<TSuggestion>({measureParentContainer, ...props}: AutoCompleteSuggestionsProps<TSuggestion>) {
    const {windowHeight} = useWindowDimensions();
    const styles = useThemeStyles();
    return (
        <Portal hostName="suggestions">
            {props.suggestions?.length > 0 && (
                <PressableWithoutFeedback
                    accessible={false}
                    style={[styles.autoCompleteOutsideContainer, {top: -windowHeight, height: windowHeight}]}
                    onPress={props.onClose}
                />
            )}
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <BaseAutoCompleteSuggestions<TSuggestion> {...props} />
        </Portal>
    );
}

AutoCompleteSuggestions.displayName = 'AutoCompleteSuggestions';

export default AutoCompleteSuggestions;
