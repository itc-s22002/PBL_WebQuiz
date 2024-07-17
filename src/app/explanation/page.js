//解説画面
const Explanation = () => {
    return(
        <div style={{width: 498, height: 275, position: 'relative', background: 'white'}}>
            <div style={{width: 141.96, height: 33, left: 296, top: 173, position: 'absolute'}}>
            <div style={{width: 141.96, height: 33, left: 0, top: 0, position: 'absolute', background: '#F36D6D', borderRadius: 20}} />
                <div style={{width: 74.13, height: 18.78, left: 34, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>
                    next
                </div>
            </div>
            <div style={{left: 50, top: 45, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>
                    解説文
            </div>
            <div style={{left: 50, top: 137, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>
                統計情報
            </div>
        </div>
        );
}

export default Explanation