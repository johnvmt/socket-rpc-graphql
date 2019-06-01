import {RpcSocketClient} from 'agnostic-rpc-socket';
import {ApolloRpcLink} from 'agnostic-rpc-graphql';

class SocketRpcGraphqlClientLink extends ApolloRpcLink {
	constructor(socket) {
		const rpcSocketClient = new RpcSocketClient(socket);
		super(rpcSocketClient.client);
	}
}

export default SocketRpcGraphqlClientLink;
