type EventType = 'click' | 'scroll' | 'mousemove'
type EXcludeEvent = Exclude<EventType, 'scroll'>; //'now only click | mousemove selectable'
const handleEvent = (event: EXcludeEvent) => {
    console.log(`Handling event: ${event}`);
}
handleEvent('click') //OK
handleEvent('mousemove') //OK
// handleEvent('scroll') //Not OK(error)